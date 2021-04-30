import React, { useState } from "react";
import {
	View,
	Text,
	ImageBackground,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Header from "../../components/Header";
import { user, doctors } from "../../utils/mocks.js";
import { useAuth } from "../../context/auth";
import api from "../../services/api";

const EditProfile = () => {
	const navigation = useNavigation();
	const authContext = useAuth();
	const [doctors, setDoctors] = useState([]);

	var doctorsArray = new Array();
	authContext.currentUser.accessRequestedCRMs?.map((requestedCRM) => {
		api.get(`user?crm=${requestedCRM}`).then((response) => {
			console.log("response", response.data);
			doctorsArray.push(response.data);
			setDoctors(doctorsArray);
		});
	});

	console.log("doctors: ", doctors);

	return (
		<ImageBackground
			style={styles.container}
			source={require("../../../assets/logo.jpg")}
			imageStyle={{ width: "100%", height: "100%" }}
		>
			<Header title="Solicitações de Acesso" navigation={navigation} />

			<View style={styles.messageContainer}>
				<Text style={styles.message}>
					Os médicos abaixo estão solicitando acesso aos seus
					arquivos. Deseja permitir?
				</Text>
			</View>

			<ScrollView
				style={styles.content}
				contentContainerStyle={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{doctors.map(
					((doctor) => (
						<>
							<View key={doctor.id} style={styles.infoGroup}>
								<Text style={styles.textTitle}>Nome: </Text>
								<Text style={styles.textValue}>
									{doctor.name}
								</Text>
							</View>

							<View key={doctor.id} style={styles.infoGroup}>
								<Text style={styles.textTitle}>CRM: </Text>
								<Text style={styles.textValue}>
									{doctor.crm}
								</Text>
							</View>

							<View style={styles.infoGroup}>
								<Text style={styles.textTitle}>
									Solicitação de Acesso:{" "}
								</Text>
								<TouchableOpacity
									style={styles.button}
									onPress={() => {}}
								>
									<Text style={styles.buttonText}>
										Permitir
									</Text>
								</TouchableOpacity>
							</View>

							<View style={styles.line} />
						</>
					): null)
				)}
			</ScrollView>
		</ImageBackground>
	);
};

export default EditProfile;
