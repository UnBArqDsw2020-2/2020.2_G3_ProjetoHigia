import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomBar from '../pages/BottomBar';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator headerMode={'none'}>
    <AppStack.Screen name="BottomBar" component={BottomBar} />
  </AppStack.Navigator>
);

export default AppRoutes;
