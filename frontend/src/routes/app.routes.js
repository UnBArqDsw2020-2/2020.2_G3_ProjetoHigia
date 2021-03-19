import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchPacient from '../pages/SearchPacient';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="SearchPacient" component={SearchPacient} />
  </AppStack.Navigator>
);

export default AppRoutes;
