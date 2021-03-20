import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/index';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function BottomBar(){
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator tabBarOptions={{activeBackgroundColor:"#7E162B", activeTintColor:"#FFF", inactiveBackgroundColor: "#7E162B"}}>
            <Tab.Screen name="Perfil" component={Home} 
                options={{
                    tabBarIcon:()=>(<MaterialIcons name="account-circle" size={20} color="white" />)
            }} />
        </Tab.Navigator>
    );
}