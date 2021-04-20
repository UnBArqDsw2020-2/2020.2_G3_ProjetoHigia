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
// import TextInputMask from 'react-native-text-input-mask';

export default function SignUpPatient() {
	const navigation = useNavigation();
	const [crm, setCrm] = useState("");
	const [cpf, setCpf] = useState(false);
	const [uf, setUF] = useState("");
	const route = useRoute();
	const isDoctor = route.params.isDoctor;
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
					/>
					<TextInput
						style={styles.inputText}
						placeholder="Ultimo Nome"
					/>
					<TextInput
						style={styles.inputText}
						//keyboardType="numeric"
						//maxLength={11}
						placeholder="Data de Nascimento"
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
								keyboardType="numeric"
								maxLength={11}
							/>
							<DropdownButton onChangeText={setUF} />
						</>
					) : null}
					<TextInput style={styles.inputText} keyboardType="numeric" maxLength={4} placeholder="Altura" />
					<TextInput style={styles.inputText} keyboardType="numeric" maxLength={3} placeholder="Peso" />
					<TextInput
						style={styles.inputText}
						placeholder="Tipo Sanguineo"
						maxLength={3}
					/>
					<View style={styles.container1}>
						<TouchableOpacity style={styles.btn}>
							<Text
								style={styles.btnText}
								onPress={() => {
									checkCRM()
										.then((response) => {
											response
												? navigation.navigate(
														"SignUpPhoto"
												  )
												: console.log("CRM Inválido");
										})
										.catch((error) => {
											console.error(error);
										});
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
