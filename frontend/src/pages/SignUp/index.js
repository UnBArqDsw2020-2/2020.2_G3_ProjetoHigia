import React, { useState } from "react";
import { Text, View, ImageBackground } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { useAuth } from "../../context/auth";

export default function SignUp(props) {
  const navigation = useNavigation();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDoctor, setIsDoctor] = useState(false);

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../../assets/img/background.jpg")}
      imageStyle={{ width: "100%", height: "100%" }}
    >
      <View style={{ width: "80%" }}>
        <Text style={styles.text}>Dados para Login</Text>
        <TextInput
          placeholder={"Email"}
          style={styles.inputText}
          value={email}
          onChangeText={setEmail}
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
                setIsDoctor(true);
                navigation.navigate("SignUpPatient", { isDoctor });
              }}
            >
              Médico
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={styles.btnText}
              onPress={() => {
                setIsDoctor(false);
                navigation.navigate("SignUpPatient", { isDoctor })
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
