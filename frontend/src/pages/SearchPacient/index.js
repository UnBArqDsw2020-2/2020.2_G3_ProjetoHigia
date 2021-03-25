import React from 'react';
import { View, Text, ImageBackground, TextInput } from 'react-native';
import styles from './styles';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import Button from '../../components/Button';

const SearchPacient = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../../assets/logo.jpg')}
      imageStyle={{ width: '100%', height: '100%' }}
    >
      <View style={styles.inputContainer}>
        <Icon name="search" color="#BABABA" size={30} />
        <TextInput style={styles.searchInput} placeholder="CPF do Paciente" />
      </View>

      <Text style={styles.pacientName}> Paciente - Fulano </Text>

      <View style={styles.buttonsContainer}>
        <Button title="Ficha Médica" onPress={() => {}} />
        <Button title="Arquivos" onPress={() => {}} />
        <Button title="Solicitar Acesso" onPress={() => {}} />
      </View>
    </ImageBackground>
  );
};

export default SearchPacient;
