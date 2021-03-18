import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MedicalReport from '../pages/MedicalReport';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="MedicalReport" component={MedicalReport} />
  </AppStack.Navigator>
);

export default AppRoutes;
