import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useAuth } from '../../context/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Login = () => {
  const { signIn } = useAuth();

  return (
    <View style={styles.container}>
      <Button title="Login" onPress={() => NavigationContainer.navigate()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;