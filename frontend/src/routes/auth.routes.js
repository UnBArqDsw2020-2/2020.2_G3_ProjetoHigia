import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp/index';
import SignUpPatient from '../pages/SignUp/SignUpPatient';
import SignUpEmergency from '../pages/SignUp/SignUpEmergency';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" options={{headerShown:false}} component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="SignUpEmergency" component={SignUpEmergency} />
      <AuthStack.Screen name="SignUpPatient" component={SignUpPatient} />
    </AuthStack.Navigator>
);

export default AuthRoutes;