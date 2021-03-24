import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchPacient from '../pages/SearchPacient';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp/index';
import SignUpPatient from '../pages/SignUp/SignUpPatient';
import SignUpEmergency from '../pages/SignUp/SignUpEmergency';
import BottomBar from '../pages/BottomBar';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator headerMode={'none'}>
    <AppStack.Screen name="SearchPacient" component={SearchPacient} />
    <AppStack.Screen name="Login" component={Login} />
    <AppStack.Screen name="SignUp" component={SignUp} />
    <AppStack.Screen name="SignUpEmergency" component={SignUpEmergency} />
    <AppStack.Screen name="SignUpPatient" component={SignUpPatient} />
  </AppStack.Navigator>
);

export default AppRoutes;
