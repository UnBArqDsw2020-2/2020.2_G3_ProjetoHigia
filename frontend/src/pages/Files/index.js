import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import PacientCardInfo from '../../components/PacientCardInfo';
import { pacient } from '../../utils/mocks';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';

const Files = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../../assets/logo.jpg')}
      imageStyle={{ width: '100%', height: '100%' }}
    >
      <Header title="Arquivos" navigation={navigation} />
      <TouchableOpacity style={styles.icon} onPress={() => {}}>
        <Icon name="calendar-today" size={30} color="#86172D" />
      </TouchableOpacity>

      <ScrollView
        style={styles.content}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        {pacient.folders.map((folder) => (
          <View key={folder.id} style={styles.foldersContainer}>
            <View style={styles.line} />

            <Text style={styles.title}>{folder.name}</Text>

            {folder.files.map((file) => (
              <PacientCardInfo key={file.id} description={file.name} exam />
            ))}
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default Files;
