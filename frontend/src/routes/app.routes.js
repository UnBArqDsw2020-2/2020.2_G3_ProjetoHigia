import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator headerMode={'none'}>
    <AppStack.Screen name="Login" component={Login} />
  </AppStack.Navigator>
);

export default AppRoutes;
