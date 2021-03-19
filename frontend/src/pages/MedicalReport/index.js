import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, ScrollView } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';
import styles from './styles';
import Card from '../../components/Card';
import FloatingButton from '../../components/FloatingButton';
import { user } from '../../utils/mocks.js';

const MedicalReport = () => {
  const [edit, setEdit] = useState(true);

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../../assets/logo.jpg')}
      imageStyle={{ width: '100%', height: '100%' }}
    >
      <FloatingButton edit={edit} setEdit={() => setEdit(!edit)} />
      <View style={styles.infoUser}>
        <Image source={require('../../../assets/profile.png')} />

        <View style={styles.dataUser}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text>{user.age} anos</Text>

          <View style={styles.heightWeight}>
            <Text>{user.height} cm</Text>
            <Text>{user.weight} kg</Text>
          </View>
        </View>
      </View>

      <ScrollView>
        <View style={styles.line} />

        <Text style={styles.title}>Grupo sanguíneo</Text>
        <Card
          name={user.bloodGroup}
          value={user.bloodGroup}
          onChangeText={() => {}}
          edit={edit}
        />

        <View style={styles.line} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Medicamentos</Text>
          {edit ? null : <Icon name="plus-circle" size={20} color="#86172D" />}
        </View>
        {user.medicament.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            value={item.name}
            onChangeText={() => {}}
            edit={edit}
          />
        ))}

        <View style={styles.line} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Alergias</Text>
          {edit ? null : <Icon name="plus-circle" size={20} color="#86172D" />}
        </View>
        {user.allergy.map((item) => (
          <Card
            key={item.id}
            edit={edit}
            name={item.name}
            value={item.name}
            onChangeText={() => {}}
          />
        ))}

        <View style={styles.line} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Contatos de Emergência</Text>
          {edit ? null : <Icon name="plus-circle" size={20} color="#86172D" />}
        </View>
        {user.emergencyContacts.map((item) => (
          <Card
            key={item.id}
            edit={edit}
            name={item.name}
            number={item.number}
            emergencyContact
            value={item.name}
            onChangeText={() => {}}
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default MedicalReport;
