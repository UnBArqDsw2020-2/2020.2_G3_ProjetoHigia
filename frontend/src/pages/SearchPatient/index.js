import React from "react";
import { View, Text, ImageBackground, TextInput } from "react-native";
import styles from "./styles";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import Button from "../../components/Button";
import Header from "../../components/Header";
import api from "../../services/api";
import { useState } from "react/cjs/react.development";

const SearchPatient = ({ navigation }) => {
	const [cpf, setCpf] = useState("");
	const [userFound, setUserFound] = useState(null);
	return (
		<ImageBackground
			style={styles.container}
			source={require("../../../assets/logo.jpg")}
			imageStyle={{ width: "100%", height: "100%" }}
		>
			<Header title="Buscar" navigation={navigation} />
			<View style={styles.inputContainer}>
				<Icon name="search" color="#BABABA" size={30} />
				<TextInput
					style={styles.searchInput}
					placeholder="CPF do Paciente"
					value={cpf}
					onChange={(e) => setCpf(e.nativeEvent.text)}
					onSubmitEditing={() =>
						api.get(`/user?cpf=${cpf}`).then((user) => {
							!user.data.error
								? setUserFound(user.data)
								: setUserFound(null);
						})
					}
					maxLength={11}
					keyboardType="numeric"
				/>
			</View>
			{userFound ? (
				<Text style={styles.patientName}>
					{" "}
					Paciente - {userFound.name}{" "}
				</Text>
			) : (
				<Text style={styles.patientName}>Pesquise por um paciente</Text>
			)}
			<View style={styles.buttonsContainer}>
				<Button
					title="Ficha Médica"
					onPress={() => {}}
					disabled={userFound}
				/>
				<Button
					title="Arquivos"
					onPress={() => {}}
					disabled={userFound}
				/>
				<Button
					title="Solicitar Acesso"
					onPress={() => {}}
					disabled={userFound}
				/>
			</View>
		</ImageBackground>
	);
};

export default SearchPatient;
