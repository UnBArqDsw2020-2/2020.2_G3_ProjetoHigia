import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
//import Signup from '../pages/Login';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={Login} />
  </AuthStack.Navigator>
);

/*const AuthRoutesSignUp = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);*/

export default AuthRoutes;
