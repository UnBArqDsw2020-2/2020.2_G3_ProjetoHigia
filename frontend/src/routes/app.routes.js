import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import MedicalReport from '../pages/MedicalReport';
import SearchPatient from '../pages/SearchPatient';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Home" options={{headerShown:false}} component={Home} />
    <AppStack.Screen name="MedicalReport" options={{headerShown:false}} component={MedicalReport} />
    <AppStack.Screen name="SearchPatient" component={SearchPatient} />
  </AppStack.Navigator>
);

export default AppRoutes;
