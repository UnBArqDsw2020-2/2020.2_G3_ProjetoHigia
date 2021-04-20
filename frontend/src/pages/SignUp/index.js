import React, { useState } from "react";
import { Text, View, ImageBackground } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function SignUp() {
	const navigation = useNavigation();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	validateEmail = (email) => {
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (reg.test(email) === false) {
		  setEmail(email);
		}
		else {
		  setEmail(email);
		}
	}

	return (
		<ImageBackground
			style={styles.container}
			source={require("../../../assets/img/background.jpg")}
			imageStyle={{ width: "100%", height: "100%" }}
		>
			<View style={{ width: "80%" }}>
				<Text style={styles.text}>Dados para Cadastro</Text>
				
				<TextInput
					placeholder={"Email"}
					style={styles.inputText}
					onChangeText={(email) => this.validateEmail(email)}
  					value={email}
				/>
				<TextInput
					style={styles.inputText}
					placeholder="Senha"
					value={password}
					onChangeText={setPassword}
					secureTextEntry={true}
				/>
				<Text style={styles.text1}>Deseja se cadastrar como:</Text>

				<View style={styles.container1}>
					<TouchableOpacity style={styles.btn}>
						<Text
							style={styles.btnText}
							onPress={() => {
								navigation.navigate("SignUpPatient", {
									isDoctor: "true",
								});
							}}
						>
							Médico
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn}>
						<Text
							style={styles.btnText}
							onPress={() => {
								navigation.navigate("SignUpPatient", {
									isDoctor: "false",
								});
							}}
						>
							Paciente
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ImageBackground>
	);
}
