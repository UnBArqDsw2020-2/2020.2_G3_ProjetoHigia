import React, { useState, useEffect } from "react";
import {
	View,
	TextInput,
	ImageBackground,
	ScrollView,
	Image,
	TouchableOpacity,
	Alert,
} from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import firebase from "firebase";
import { useAuth } from "../../context/auth";
import api from "../../services/api";
import * as ImagePicker from "expo-image-picker";

const EditProfile = () => {
	const { currentUser } = useAuth();
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [name, setName] = useState("");
	const [birthday, setBirthday] = useState("");
	const [weight, setWheight] = useState(null);
	const [height, setHeight] = useState(null);
	const [photo, setPhoto] = useState("");

	async function requestPermission() {
		const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
		if (permissionResult.granted === false) {
			alertMessage("É preciso permissão para tirar foto.");
			return;
		}
	}

	async function takePhoto() {
		requestPermission();
		const pickerResult = await ImagePicker.launchCameraAsync({
			base64: true,
			allowsEditing: true,
			quality: 0.5,
			aspect: [2, 2],
		});
		if (pickerResult.cancelled === true) {
			return;
		}
		setPhoto(pickerResult.base64);
	}

	useEffect(() => {
		api.get(`medicalReport?cpf=${currentUser?.cpf}`).then(
			(medicalReport) => {
				setWheight(medicalReport.data.weight);
				setHeight(medicalReport.data.height);
			}
		);
		setName(currentUser.name);
		// setName(currentUser.photo);
		setBirthday(currentUser.birthday);
	}, []);

	const navigation = useNavigation();

	const updateData = async () => {
		if (oldPassword && newPassword) {
			var user = currentUser;
			var credential = firebase.auth.EmailAuthProvider.credential(
				currentUser?.email,
				oldPassword
			);

			user.reauthenticateWithCredential(credential)
				.then(function () {
					user.updatePassword(newPassword)
						.then(function () {
							Alert.alert("Senha atualizada com sucesso");
						})
						.catch(function (error) {
							Alert.alert(error);
						});
				})
				.catch(function (error) {
					Alert.alert(error);
				});
		}
		const dataToSaveMedicalReport = {
			cpf: currentUser?.cpf,
			data: {
				weight: Number(weight),
				height: Number(height),
			},
		};
		api.put("medicalReport", dataToSaveMedicalReport).then(() =>
			console.log("Updated medicalReport")
		);
		const dataToSaveUser = {
			cpf: currentUser?.cpf,
			data: {
				name: name,
				// photo: photo,
				birthday: birthday,
			},
		};
		api.put("user", dataToSaveUser).then(() => console.log("Updated user"));
	};

	return (
		<ImageBackground
			style={styles.container}
			source={require("../../../assets/logo.jpg")}
			imageStyle={{ width: "100%", height: "100%" }}
		>
			<Header title="Editar Perfil" navigation={navigation} />
			<ScrollView
				style={styles.content}
				contentContainerStyle={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<View style={styles.imageContainer}>
					<Image source={{ uri: `data:image/png;base64,${photo}` }} />
					<TouchableOpacity
						style={styles.iconContainer}
						onPress={() => takePhoto()}
					>
						<Icon
							name="edit"
							size={17}
							color="#FFF"
							style={styles.icon}
						/>
					</TouchableOpacity>
				</View>

				<View style={styles.textContainer}>
					<TextInput
						style={styles.inputText}
						placeholder="Nome"
						value={name}
						onChangeText={setName}
					/>
					<TextInput
						style={styles.inputText}
						placeholder="Idade"
						value={birthday}
						onChangeText={setBirthday}
					/>
					<TextInput
						style={styles.inputText}
						placeholder="Peso"
						value={weight?.toString()}
						onChangeText={setWheight}
						maxLength={3}
						keyboardType="numeric"
					/>
					<TextInput
						style={styles.inputText}
						placeholder="Altura"
						value={height?.toString()}
						onChangeText={setHeight}
						maxLength={3}
						keyboardType="numeric"
					/>
					<TextInput
						style={styles.inputText}
						placeholder="Nova Senha"
						secureTextEntry={true}
						value={newPassword}
						onChangeText={setNewPassword}
					/>
					<TextInput
						style={styles.inputText}
						placeholder="Senha Atual"
						secureTextEntry={true}
						value={oldPassword}
						onChangeText={setOldPassword}
					/>
				</View>

				<Button
					title="Atualizar"
					onPress={() => updateData()}
					disabled={weight && height && name && birthday}
				/>
			</ScrollView>
		</ImageBackground>
	);
};

export default EditProfile;
