import React from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import UserInfo from "../../components/UserInfo";
import PacientCardInfo from "../../components/PacientCardInfo";
import FloatingAccessButton from "../../components/FloatingAccessButton";
import CardEmergencyContact from "../../components/CardEmergencyContact";
import { pacient } from "../../utils/mocks.js";
import styles from "./styles";

const PacientReport = () => {
  return (
    <ImageBackground
      style={[
        styles.container,
        { paddingBottom: pacient.hasFullAccess ? null : "25%" },
      ]}
      source={require("../../../assets/logo.jpg")}
      imageStyle={{ width: "100%", height: "100%" }}
    >
      <UserInfo
        name={pacient.name}
        age={pacient.age}
        height={pacient.height}
        weight={pacient.weight}
      />

      {pacient.hasFullAccess ? null : <FloatingAccessButton />}
      <ScrollView
        style={styles.content}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.line} />

        <Text style={styles.title}>Grupo sanguíneo</Text>
        <PacientCardInfo description={pacient.bloodGroup} onPress={() => {}} />

        <View style={styles.line} />

        <Text style={styles.title}>Medicamentos</Text>
        {pacient.medicament.map((item) => (
          <PacientCardInfo key={item.id} description={item.name} />
        ))}

        <View style={styles.line} />

        <Text style={styles.title}>Alergias</Text>
        {pacient.allergy.map((item) => (
          <PacientCardInfo key={item.id} description={item.name} />
        ))}

        {pacient.folders.map((folder) => (
          <View key={folder.id} style={styles.foldersContainer}>
            <View style={styles.line} />

            <Text style={styles.title}>{folder.name}</Text>

            {folder.files.map((file) => (
              <PacientCardInfo key={file.id} description={file.name} exam />
            ))}
          </View>
        ))}

        <View style={styles.line} />

        <Text style={styles.title}> Contatos de Emergência </Text>
        {pacient.emergencyContacts.map((item) => (
          <CardEmergencyContact
            key={item.id}
            name={item.name}
            number={item.number}
            width={"80%"}
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default PacientReport;
