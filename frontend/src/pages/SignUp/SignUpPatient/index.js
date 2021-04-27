import React, { useEffect, useState } from "react";
import { Text, View, ImageBackground } from "react-native";
import {
	ScrollView,
	TextInput,
	TouchableOpacity,
} from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "../styles";
import crmApi from "../../../services/crmApi";
import axios from "axios";
import DropdownButton from "../../../components/DropdownButton";
import cpfValidator from "../../../utils/cpfValidator";
import statesMock from "../../../utils/statesMock";
import bloodTypeMock from "../../../utils/bloodTypeMock";

export default function SignUpPatient() {
	const navigation = useNavigation();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [crm, setCrm] = useState(null);
	const [cpf, setCpf] = useState("");
	const [uf, setUF] = useState(null);
	const [weight, setWeight] = useState(null);
	const [height, setHeight] = useState(null);
	const [bloodType, setBloodType] = useState(null);
	const [birthday, setBirthday] = useState(null);
	const route = useRoute();
	const { isDoctor } = route.params;
	const user = route.params;
	let isCpfValid = cpfValidator(cpf) || cpf == "";

	async function checkCRM() {
		let params = {
			uf: uf,
			q: crm,
			tipo: "crm",
			chave: 9280370609,
			destino: "json",
		};

		let result = false;

		await crmApi
			.get("", {
				params: params,
			})
			.then((response) => {
				result = response.data.total > 0;
			})
			.catch((error) => {
				console.error(error);
			});
		return result;
	}

	const goToNextPage = () => {
		navigation.navigate("SignUpPhoto", {
			userData: {
				name: firstName + " " + lastName,
				crm: uf && crm ? uf + crm : null,
				cpf: cpf,
				email: user.email,
				password: user.password,
				birthday: birthday,
			},
			medicalReport: {
				bloodType: bloodType,
				weight: weight,
				height: height,
			},
		});
	};

	return (
		<ImageBackground
			style={styles.container}
			source={require("../../../../assets/img/background.jpg")}
			imageStyle={{ width: "100%", height: "100%" }}
		>
			<ScrollView style={{ flex: 1, marginTop: "20%" }}>
				<View style={styles.form}>
					<Text style={styles.text}>Dados para Perfil</Text>
					<TextInput
						style={styles.inputText}
						placeholder="Primeiro Nome"
						onChangeText={setFirstName}
					/>
					<TextInput
						style={styles.inputText}
						placeholder="Último Nome"
						onChangeText={setLastName}
					/>
					<TextInput
						style={styles.inputText}
						placeholder="Data de Nascimento"
						onChangeText={setBirthday}
					/>
					<View>
						<TextInput
							style={
								isCpfValid
									? styles.inputText
									: styles.inputTextError
							}
							value={cpf}
							onChange={(e) => {
								setCpf(e.nativeEvent.text);
							}}
							placeholder="CPF"
							keyboardType="numeric"
							maxLength={11}
						/>
						{isCpfValid ? null : (
							<Text style={styles.errorText}>CPF inválido</Text>
						)}
					</View>
					{isDoctor === "true" ? (
						<>
							<TextInput
								style={styles.inputText}
								placeholder="CRM"
								onChangeText={setCrm}
							/>
							<DropdownButton
								value={uf}
								setValue={setUF}
								mock={statesMock}
							/>
						</>
					) : null}
					<TextInput
						style={styles.inputText}
						placeholder="Altura"
						onChangeText={setHeight}
					/>
					<TextInput
						style={styles.inputText}
						placeholder="Peso"
						onChangeText={setWeight}
					/>
					<DropdownButton
						value={bloodType}
						setValue={setBloodType}
						mock={bloodTypeMock}
					/>
					<View style={styles.container1}>
						<TouchableOpacity style={styles.btn}>
							<Text
								style={styles.btnText}
								onPress={() => {
									crm
										? checkCRM().then(() => goToNextPage())
										: goToNextPage();
								}}
							>
								Próximo
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</ImageBackground>
	);
}
