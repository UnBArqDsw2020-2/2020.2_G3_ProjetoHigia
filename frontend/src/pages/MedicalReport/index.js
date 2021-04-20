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

const MedicalReport = ({ navigation }) => {
  const [currentMedicalReport, setCurrentMedicalReport] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser && !currentMedicalReport)
      api
        .get(`/medicalReport?cpf=${currentUser?.cpf}`)
        .then((medicalReport) => {
          setCurrentMedicalReport(medicalReport.data);
          console.log(currentUser);
        });
  });

  const [edit, setEdit] = useState(false);

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../../assets/logo.jpg")}
      imageStyle={{ width: "100%", height: "100%" }}
    >
      <Header title="Ficha medica" navigation={navigation} />
      <FloatingButton edit={edit} setEdit={() => setEdit(!edit)} />
      <UserInfo
        name={currentUser?.name}
        age={user?.age}
        height={currentMedicalReport?.height}
        weight={currentMedicalReport?.weight}
      />

      <ScrollView>
        <View style={styles.line} />

        <Text style={styles.title}>Grupo sanguíneo</Text>
        <CardInfo
          name={user.bloodGroup}
          description={currentMedicalReport?.bloodType}
          onChangeText={() => {}}
          edit={edit}
        />

        <View style={styles.line} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Medicamentos</Text>
          {edit ? <Icon name="add-circle" size={20} color="#86172D" /> : null}
        </View>
        {currentMedicalReport?.medicines.map((item, index) => (
          <CardInfo
            key={index}
            description={item}
            onChangeText={() => {}}
            edit={edit}
          />
        ))}

        <View style={styles.line} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Alergias</Text>
          {edit ? <Icon name="add-circle" size={20} color="#86172D" /> : null}
        </View>
        {currentMedicalReport?.allergies.map((item, index) => (
          <CardInfo
            key={index}
            description={item}
            onChangeText={() => {}}
            edit={edit}
          />
        ))}
        <View style={styles.line} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Comorbidades</Text>
          {edit ? <Icon name="add-circle" size={20} color="#86172D" /> : null}
        </View>

        {currentMedicalReport?.comorbidities.map((item, index) => (
          <CardInfo
            key={index}
            description={item}
            onChangeText={() => {}}
            edit={edit}
          />
        ))}

        <View style={styles.line} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Contatos de Emergência</Text>
          {edit ? <Icon name="add-circle" size={20} color="#86172D" /> : null}
        </View>
        {currentUser?.contact.map((item) => (
          <CardEmergencyContact
            key={item.id}
            name={item.name}
            number={item.number}
            edit={edit}
            width="70%"
          />
        ))}

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Comentários</Text>
          {edit ? <Icon name="add-circle" size={20} color="#86172D" /> : null}
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
