import React, { useState } from "react";
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

export default function SignUpPatient(props) {
  const navigation = useNavigation();
  const [crm, setCrm] = useState("");
  const [uf, setUF] = useState("");
  const route = useRoute();
  const isDoctor = route.params.isDoctor;

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
          <TextInput style={styles.inputText} placeholder="Primeiro Nome" />
          <TextInput style={styles.inputText} placeholder="Ultimo Nome" />
          <TextInput
            style={styles.inputText}
            placeholder="Data de Nascimento"
          />
          <TextInput style={styles.inputText} placeholder="CPF" />
          {isDoctor === "true" ? (
            <>
              <TextInput
                style={styles.inputText}
                placeholder="CRM"
                onChangeText={setCrm}
              />
              <TextInput
                style={styles.inputText}
                placeholder="Estado"
                onChangeText={setUF}
              />
            </>
          ) : null}
          <TextInput style={styles.inputText} placeholder="Altura" />
          <TextInput style={styles.inputText} placeholder="Peso" />
          <TextInput style={styles.inputText} placeholder="Tipo Sanguineo" />
          <View s tyle={styles.container1}>
            <TouchableOpacity style={styles.btn}>
              <Text
                style={styles.btnText}
                onPress={() => {
                  checkCRM()
                    .then((response) => {
                      response
                        ? navigation.navigate("SignUpEmergency")
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
