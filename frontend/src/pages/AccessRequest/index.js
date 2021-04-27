import React from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Header from "../../components/Header";
import { user, doctors } from "../../utils/mocks.js";

const EditProfile = () => {
	const navigation = useNavigation();

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
				{doctors.map((doctor) =>
					user.accessRequestedCRMs.includes(doctor.id) ? (
						<>
							<View key={doctor.id} style={styles.infoGroup}>
								<Text style={styles.textTitle}>Nome: </Text>
								<Text style={styles.textValue}>
									{doctor.name}
								</Text>
							</View>

							<View style={styles.infoGroup}>
								<Text style={styles.textTitle}>
									Especialidade:{" "}
								</Text>
								<Text style={styles.textValue}>
									{doctor.specialty}
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
					) : null
				)}
			</ScrollView>
		</ImageBackground>
	);
};

export default EditProfile;
