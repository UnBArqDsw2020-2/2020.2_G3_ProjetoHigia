import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/auth';
import firebase from 'firebase';
import apiKeys from './src/utils/firebaseKeys.js';
import { useFonts, Junge_400Regular } from '@expo-google-fonts/junge';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';
import MedicalReport from './src/pages/MedicalReport';

const App = () => {
  var [fontsLoaded] = useFonts({ Junge_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (!firebase.apps.length) {
    console.log('Connected with Firebase');
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  return (
    <NavigationContainer>
      <MedicalReport/>
      {/* <AuthProvider>
        <Routes />
      </AuthProvider> */}
    </NavigationContainer>
  );
};

export default App;
