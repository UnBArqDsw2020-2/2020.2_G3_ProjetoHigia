import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useAuth } from '../../context/auth';

const Login = () => {
  const { signIn } = useAuth();

  return (
    <View style={styles.container}>
      <Button title="Login" onPress={signIn} />
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
