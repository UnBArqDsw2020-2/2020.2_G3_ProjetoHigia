import React from "react";
import {
  TextInput,
} from "react-native-gesture-handler";
import styles from "./styles";

const TextInputComponent = ({ placeholder, value, onChangeText, secureTextEntry}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default TextInputComponent;
