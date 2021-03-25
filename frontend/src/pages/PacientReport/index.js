import React from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import UserInfo from '../../components/UserInfo';
import PacientCardInfo from '../../components/PacientCardInfo';
import { user } from '../../utils/mocks.js';
import styles from './styles';

const PacientReport = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../../assets/logo.jpg')}
      imageStyle={{ width: '100%', height: '100%' }}
    >
      <UserInfo
        name={user.name}
        age={user.age}
        height={user.height}
        weight={user.weight}
      />

      <ScrollView
        style={styles.content}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <View style={styles.line} />

        <Text style={styles.title}>Grupo sanguíneo</Text>
        <PacientCardInfo description={user.bloodGroup} onPress={() => {}} />

        <View style={styles.line} />

        <Text style={styles.title}>Medicamentos</Text>
        {user.medicament.map((item) => (
          <PacientCardInfo key={item.id} description={item.name} />
        ))}

        <View style={styles.line} />

        <Text style={styles.title}>Alergias</Text>
        {user.allergy.map((item) => (
          <PacientCardInfo key={item.id} description={item.name} />
        ))}

        {user.folders.map((folder) => (
          <View key={folder.id} style={styles.foldersContainer}>
            <View style={styles.line} />

            <Text style={styles.title}>{folder.name}</Text>

            {folder.files.map((file) => (
              <PacientCardInfo key={file.id} description={file.name} />
            ))}
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default PacientReport;
