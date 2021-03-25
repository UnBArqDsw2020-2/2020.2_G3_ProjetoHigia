import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useAuth } from '../../context/auth';
import Header from '../../components/Header/index'
import styles from './style'

const Home = ({navigation}) => {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Header title='Perfil' navigation = {navigation}></Header>
    </View>
  );
};

export default Home;