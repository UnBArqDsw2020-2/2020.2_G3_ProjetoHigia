import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MedicalReport from '../MedicalReport';
import SearchPatient from '../SearchPatient';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#7E162B',
        activeTintColor: '#FFF',
        inactiveBackgroundColor: '#EFEFEF',
      }}
    >
      <Tab.Screen
        name="Perfil"
        component={MedicalReport}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="account-circle" size={25} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Arquivos"
        component={MedicalReport}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="archive" size={25} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={SearchPatient}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="search" size={25} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Configuracao"
        component={MedicalReport}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="build" size={25} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
