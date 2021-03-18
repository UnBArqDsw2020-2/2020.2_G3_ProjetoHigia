import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import styles from './styles';
import Card from '../../components/Card';

const MedicalReport = () => {
  const medicamentos = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../../assets/logo.jpg')}
      imageStyle={{ width: '100%', height: '100%' }}
    >
      <View style={styles.infoUser}>
        <Image source={require('../../../assets/profile.png')} />

        <View style={styles.dataUser}>
          <Text>Fulano</Text>
          <Text>35 anos</Text>

          <View style={styles.heightWeight}>
            <Text>170 cm</Text>
            <Text>70 kg</Text>
          </View>
        </View>
      </View>

      <View style={styles.line} />

      <Text style={styles.title}>Grupo sanguíneo</Text>
      <Card />

      <View style={styles.line} />

      <Text style={styles.title}>Medicamentos</Text>
      {medicamentos.map((item) => (
        <Card />
      ))}

      <View style={styles.line} />

      <Text style={styles.title}>Alergias</Text>
      {medicamentos.map((item) => (
        <Card />
      ))}

      <View style={styles.line} />

      <Text style={styles.title}>Contatos de Emergência</Text>
      {medicamentos.map((item) => (
        <Card emergencyContact />
      ))}
    </ImageBackground>
  );
};

export default MedicalReport;
