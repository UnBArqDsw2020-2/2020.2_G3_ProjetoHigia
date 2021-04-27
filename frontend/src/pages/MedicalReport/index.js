import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, ScrollView, Button } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import styles from "./styles";
import CardInfo from "../../components/CardInfo";
import FloatingButton from "../../components/FloatingButton";
import UserInfo from "../../components/UserInfo";
import { user } from "../../utils/mocks.js";
import Header from "../../components/Header";
import CardEmergencyContact from "../../components/CardEmergencyContact";
import { useAuth } from "../../context/auth";
import api from "../../services/api";
import { TouchableOpacity } from "react-native-gesture-handler";
import DropdownButton from "../../components/DropdownButton";
import bloodTypeMock from "../../utils/bloodTypeMock";

const MedicalReport = ({ navigation }) => {
	const [medicalReportDefault, setMedicalReportDefault] = useState(null);
	const [medicines, setMedicines] = useState([]);
	const [allergies, setAllergies] = useState([]);
	const [comorbidities, setComorbidities] = useState([]);
	const [contacts, setContacts] = useState([]);
	const [bloodType, setBloodType] = useState(null);

	const { currentUser } = useAuth();

	useEffect(() => {
		if (currentUser && !medicalReportDefault) getDataApi();
	});

	const getDataApi = async () => {
		await api
			.get(`/medicalReport?cpf=${currentUser?.cpf}`)
			.then((medicalReport) => {
				setMedicalReportDefault(medicalReport.data);
				const data = medicalReport.data;
				setMedicines(data.medicines);
				setAllergies(data.allergies);
				setComorbidities(data.comorbidities);
				setContacts(currentUser?.contact);
				setBloodType(data.bloodType)
			});
	};

	const [edit, setEdit] = useState(false);

	const updateFieldChanged = (index, setValue, value, e) => {
		let newArr = [...value];
		newArr[index] = e;

		setValue(newArr);
	};

	return (
		<ImageBackground
			style={styles.container}
			source={require("../../../assets/logo.jpg")}
			imageStyle={{ width: "100%", height: "100%" }}
		>
			<Header title="Ficha medica" navigation={navigation} />
			<FloatingButton
				edit={edit}
				setEdit={() => setEdit(!edit)}
				dataToSave={[medicines, allergies, comorbidities, contacts]}
				resetData={getDataApi}
				cpf={currentUser?.cpf}
			/>
			<UserInfo
				name={currentUser?.name}
				age={user?.age}
				height={medicalReportDefault?.height}
				weight={medicalReportDefault?.weight}
			/>

			<ScrollView>
				<View style={styles.line} />

				<Text style={styles.title}>Grupo sanguíneo</Text>
				<View style={styles.dropdownView}>
					<DropdownButton
						value={bloodType}
						setValue={setBloodType}
						mock={bloodTypeMock}
					/>
				</View>
				<View style={styles.line} />

				<View style={styles.titleContainer}>
					<Text style={styles.title}>Medicamentos</Text>
					{edit ? (
						<TouchableOpacity
							onPress={() => setMedicines([...medicines, ""])}
						>
							<Icon name="add-circle" size={20} color="#86172D" />
						</TouchableOpacity>
					) : null}
				</View>
				{medicines?.map((item, index) => (
					<CardInfo
						key={index}
						description={item}
						onChangeText={(e) =>
							updateFieldChanged(
								index,
								setMedicines,
								medicines,
								e
							)
						}
						onPress={() => {
							setMedicines(
								medicines.filter((value, i) => index !== i)
							);
						}}
						edit={edit}
					/>
				))}

				<View style={styles.line} />

				<View style={styles.titleContainer}>
					<Text style={styles.title}>Alergias</Text>
					{edit ? (
						<TouchableOpacity
							onPress={() => setAllergies([...allergies, ""])}
						>
							<Icon name="add-circle" size={20} color="#86172D" />
						</TouchableOpacity>
					) : null}
				</View>
				{allergies.map((item, index) => (
					<CardInfo
						key={index}
						description={item}
						onChangeText={(e) =>
							updateFieldChanged(
								index,
								setAllergies,
								allergies,
								e
							)
						}
						onPress={() => {
							setAllergies(
								allergies.filter((value, i) => index !== i)
							);
						}}
						edit={edit}
					/>
				))}
				<View style={styles.line} />

				<View style={styles.titleContainer}>
					<Text style={styles.title}>Comorbidades</Text>
					{edit ? (
						<TouchableOpacity
							onPress={() =>
								setComorbidities([...comorbidities, ""])
							}
						>
							<Icon name="add-circle" size={20} color="#86172D" />
						</TouchableOpacity>
					) : null}
				</View>

				{comorbidities.map((item, index) => (
					<CardInfo
						key={index}
						description={item}
						onChangeText={(e) =>
							updateFieldChanged(
								index,
								setComorbidities,
								comorbidities,
								e
							)
						}
						onPress={() => {
							setComorbidities(
								comorbidities.filter((value, i) => index !== i)
							);
						}}
						edit={edit}
					/>
				))}

				<View style={styles.line} />

				<View style={styles.titleContainer}>
					<Text style={styles.title}>Contatos de Emergência</Text>
					{edit ? (
						<TouchableOpacity
							onPress={() => setContacts([...contacts, ""])}
						>
							<Icon name="add-circle" size={20} color="#86172D" />
						</TouchableOpacity>
					) : null}
				</View>
				{contacts?.map((item, index) => (
					<CardEmergencyContact
						key={item._id}
						name={item.name}
						onPress={() => {
							setContacts(
								contacts.filter((value, i) => index !== i)
							);
						}}
						onChangeText={(e) =>
							updateFieldChanged(index, setContacts, contacts, e)
						}
						number={item.number}
						edit={edit}
						width="70%"
					/>
				))}

				<View style={styles.titleContainer}>
					<Text style={styles.title}>Comentários</Text>
					{edit ? (
						<TouchableOpacity
							onPress={() => setMedicines([...medicines, ""])}
						>
							<Icon name="add-circle" size={20} color="#86172D" />
						</TouchableOpacity>
					) : null}
				</View>
				{user.coments.map((item) => (
					<CardInfo
						key={item.id}
						description={item.name}
						onChangeText={() => {}}
						edit={edit}
					/>
				))}
			</ScrollView>
		</ImageBackground>
	);
};

export default MedicalReport;
