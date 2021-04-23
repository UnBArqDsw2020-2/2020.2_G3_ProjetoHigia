import React, { useState, useEffect } from "react";
import { Text, View, ImageBackground, Image, Dimensions } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "../styles";
import photoStyles from "./styles";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function SignUpPhoto() {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState(null);

  async function requestPermission() {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alertMessage("É preciso permissão para tirar foto.");
      return;
    }
  }

  async function takePhoto() {
    requestPermission();
    const pickerResult = await ImagePicker.launchCameraAsync({
      base64: true,
      allowsEditing: true,
      quality: 0.5,
      aspect: [2, 2],
    });
    if (pickerResult.cancelled === true) {
      return;
    }
    setPhoto(pickerResult.base64);
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../../../assets/img/background.jpg")}
      imageStyle={{ width: "100%", height: "100%" }}
    >
      <ScrollView style={{ flex: 1, marginTop: "20%" }}>
        <View style={styles.form}>
          <Text style={styles.text}>Foto de Perfil</Text>
          {photo ? (
            <TouchableOpacity
              onPress={async () => {
                takePhoto();
              }}
            >
              <Image
                source={{ uri: `data:image/png;base64,${photo}` }}
                style={photoStyles.image}
              />
            </TouchableOpacity>
          ) : (
            <View style={styles.container1}>
              <TouchableOpacity
                onPress={async () => {
                  takePhoto();
                }}
                style={photoStyles.image}
              >
                <Icon
                  name="photo-camera"
                  size={Dimensions.get("window").width * 0.5}
                  color="#AAA"
                />
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.container1}>
            <TouchableOpacity style={styles.btn}>
              <Text
                style={styles.btnText}
                onPress={() => {
                  navigation.navigate("SignUpEmergency");
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
