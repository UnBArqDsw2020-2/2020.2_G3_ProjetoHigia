import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const FloatingAccessButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}> Solicitar Acesso Completo </Text>
    </TouchableOpacity>
  );
};
export default FloatingAccessButton;
