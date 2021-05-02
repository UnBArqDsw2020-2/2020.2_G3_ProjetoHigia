import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const FloatingAccessButton = ({ onPress }) => {
	return (
		<TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
			<Text
				style={styles.buttonText}
				// onClick={solicitarAcesso(userFound, currentUser)}
			>
				{" "}
				Solicitar Acesso Completo{" "}
			</Text>
		</TouchableOpacity>
	);
};

function solicitarAcesso(patient, currentUser) {
	//TODO pegar o crm do usuário e mandar no lugar do 2141231
	api.post("/requestFullAccess", {
		id: patient._id,
		crm: "2141231",
	}).then(() => {
		alert("Solicitação enviada com sucesso");
	});
}

export default FloatingAccessButton;
