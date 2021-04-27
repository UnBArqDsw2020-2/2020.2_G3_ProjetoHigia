import React from "react";
import { Text, View, ImageBackground } from "react-native";
import {
	ScrollView,
	TextInput,
	TouchableOpacity,
} from "react-native-gesture-handler";
import styles from "../styles";
import { MaterialIcons } from "@expo/vector-icons";
import api from "../../../services/api";
import { useNavigation, useRoute } from "@react-navigation/core";
import { useState } from "react/cjs/react.development";

export default function SignUpEmergency() {
	const navigation = useNavigation();
	const route = useRoute();
	const { userData, medicalReport } = route.params;
	const [name, setName] = useState([]);
	const [phone, setPhote] = useState([]);

	const createUser = async () => {
		api.post("/user", {
			...userData,
			contact: [
				{
					name: name,
					number: phone,
				},
			],
		}).then(() => {
			api.post("/medicalReport", {
				...medicalReport,
				cpf: userData.cpf,
			}).then(() => {
				api.post("/archive", {
					cpf: userData.cpf,
				}).then(() => {
					alert("Usuário criado com sucesso")
					navigation.navigate("Login");
				});
			});
		});
	};

	return (
		<ImageBackground
			style={styles.container}
			source={require("../../../../assets/img/background.jpg")}
			imageStyle={{ width: "100%", height: "100%" }}
		>
			<ScrollView style={{ flex: 1, marginTop: "20%" }}>
				<Text
					style={{
						fontSize: 25,
						alignSelf: "center",
						fontWeight: "bold",
						marginBottom: 40,
					}}
				>
					Contato de emergência
				</Text>
				<TextInput
					style={styles.inputText}
					placeholder="Nome completo"
					onChangeText={setName}
				/>
				<TextInput
					style={{ ...styles.inputText, marginBottom: 10 }}
					placeholder="Celular"
					onChangeText={setPhote}
				/>
				<TouchableOpacity>
					<MaterialIcons
						name="add-circle"
						size={30}
						color="#7E162B"
						style={{ alignSelf: "flex-end" }}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btn}
					onPress={() => {
						createUser();
					}}
				>
					<Text style={styles.btnText}>Finalizar</Text>
				</TouchableOpacity>
			</ScrollView>
		</ImageBackground>
	);
}
