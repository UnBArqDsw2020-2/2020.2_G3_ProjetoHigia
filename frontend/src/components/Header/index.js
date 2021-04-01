import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useAuth } from '../../context/auth';
import styles from './style';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header(props) {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{props.title}</Text>

      <TouchableOpacity style={styles.btnLogout} onPress={signOut}>
        <MaterialIcons name="logout" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}
