import React from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import UserInfo from '../../components/UserInfo';
import PacientCardInfo from '../../components/PacientCardInfo';
import FloatingAccessButton from '../../components/FloatingAccessButton';
import CardEmergencyContact from '../../components/CardEmergencyContact';
import { pacient } from '../../utils/mocks.js';
import styles from './styles';
import Header from '../../components/Header';
import { useEffect } from 'react/cjs/react.development';
import { useRoute } from '@react-navigation/core';

const PatientReport = () => {
  const route = useRoute();
  const {userFound, medicalReport} = route.params

  return (
    <ImageBackground
      style={[
        styles.container,
        { paddingBottom: pacient.hasFullAccess ? null : '25%' },
      ]}
      source={require('../../../assets/logo.jpg')}
      imageStyle={{ width: '100%', height: '100%' }}
    >
      <UserInfo
        name={userFound.name}
        age={userFound.birthday}
        height={medicalReport.height}
        weight={medicalReport.weight}
      />

      {pacient.hasFullAccess ? null : <FloatingAccessButton />}
      <ScrollView
        style={styles.content}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <View style={styles.line} />

        <Text style={styles.title}>Grupo sanguíneo</Text>
        <PacientCardInfo description={medicalReport.bloodType} onPress={() => {}} />

        <View style={styles.line} />

        <Text style={styles.title}>Medicamentos</Text>
        {medicalReport.medicines.map((item, index) => (
          <PacientCardInfo key={index} description={item} />
        ))}

        <View style={styles.line} />

        <Text style={styles.title}>Alergias</Text>
        {medicalReport.allergies.map((item, index) => (
          <PacientCardInfo key={index} description={item} />
        ))}

        <View style={styles.line} />

        <Text style={styles.title}> Contatos de Emergência </Text>
        {userFound.contact.map((item) => (
          <CardEmergencyContact
            key={item.id}
            name={item.name}
            number={item.number}
            width={'80%'}
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default PatientReport;
