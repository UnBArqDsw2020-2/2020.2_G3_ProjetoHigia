import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, ScrollView } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';
import CardInfo from '../../components/CardInfo';
import FloatingButton from '../../components/FloatingButton';
import { user } from '../../utils/mocks.js';
import CardEmergencyContact from '../../components/CardEmergencyContact';

const MedicalReport = () => {
  const [edit, setEdit] = useState(false);

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
        <CardInfo
          name={user.bloodGroup}
          description={user.bloodGroup}
          onChangeText={() => {}}
          edit={edit}
        />

        <View style={styles.line} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Medicamentos</Text>
          {edit ? <Icon name="add-circle" size={20} color="#86172D" /> : null}
        </View>
        {user.medicament.map((item) => (
          <CardInfo
            key={item.id}
            description={item.name}
            onChangeText={() => {}}
            edit={edit}
          />
        ))}

        <View style={styles.line} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Alergias</Text>
          {edit ? <Icon name="add-circle" size={20} color="#86172D" /> : null}
        </View>
        {user.allergy.map((item) => (
          <CardInfo
            key={item.id}
            description={item.name}
            onChangeText={() => {}}
            edit={edit}
          />
        ))}

        <View style={styles.line} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Contatos de Emergência</Text>
          {edit ? <Icon name="add-circle" size={20} color="#86172D" /> : null}
        </View>
        {user.emergencyContacts.map((item) => (
          <CardEmergencyContact
            key={item.id}
            name={item.name}
            number={item.number}
            edit={edit}
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default MedicalReport;
