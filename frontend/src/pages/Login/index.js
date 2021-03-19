import React, { useState } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  Platform,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { useAuth } from "../../context/auth";
import TextInputComponent from "../../components/TextInputComponent";

const Login = () => {
  const { signIn } = useAuth();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View
        style={styles.fieldsView}
      >
        <Image
          source={require("../../../assets/img/icon.png")}
          style={{
            width: 100,
            height: 100,
            alignSelf: "center",
          }}
        />

        <View style={styles.login__form}>
          <TextInputComponent
            placeholder={"Email"}
            value={email}
            onChangeText={setEmail}
          />
          <TextInputComponent
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
       
          <View style={styles.container2}>
            <TouchableOpacity
              style={styles.login__button}
              onPress={() => signIn({ email }, { password })}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp")}
              style={styles.login__button1}
            >
              <Text style={styles.buttonText1}>Criar uma conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
