import React, { useState } from 'react';
import {
  View,
  TextInput,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { user } from '../../utils/mocks.js';
import firebase from 'firebase';

const EditProfile = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigation = useNavigation();

  const updateData = () => {
    
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../../assets/logo.jpg')}
      imageStyle={{ width: '100%', height: '100%' }}
    >
      <Header title="Editar Perfil" navigation={navigation} />
      <ScrollView
        style={styles.content}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View style={styles.imageContainer}>
          <Image source={require('../../../assets/profile.png')} />
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="edit" size={17} color="#FFF" style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Nome"
            value={user.name}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Idade"
            value={user.age.toString()}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Peso"
            value={user.weight.toString()}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Altura"
            value={user.height.toString()}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Nova Senha"
            secureTextEntry={true}
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Senha Atual"
            secureTextEntry={true}
            value={oldPassword}
            onChangeText={setOldPassword}
          />
        </View>

        <Button title="Atualizar" onPress={() => updateData()} />
      </ScrollView>
    </ImageBackground>
  );
};

export default EditProfile;
