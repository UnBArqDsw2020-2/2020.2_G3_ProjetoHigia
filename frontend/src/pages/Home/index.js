import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useAuth } from '../../context/auth';

const Home = () => {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={signOut} />
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

export default Home;
