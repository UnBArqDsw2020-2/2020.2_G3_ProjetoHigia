import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import MedicalReport from "../pages/MedicalReport";
import SearchPatient from "../pages/SearchPatient";
import PatientReport from "../pages/PatientReport";

const AppStack = createStackNavigator();

const AppRoutes = () => (
	<AppStack.Navigator>
		<AppStack.Screen
			name="Home"
			options={{ headerShown: false }}
			component={Home}
		/>
		<AppStack.Screen
			name="MedicalReport"
			options={{ headerShown: false }}
			component={MedicalReport}
		/>
		<AppStack.Screen
			name="SearchPatient"
			options={{ headerShown: false }}
			component={SearchPatient}
		/>
		<AppStack.Screen
			name="PatientFound"
			options={{
				title: "Buscar",
				headerStyle: {
					backgroundColor: '#7E162B',
          height:50
				},
        headerTintColor:"#FFF",
        headerTitleAlign:"center"
			}}
			component={PatientReport}
		/>
	</AppStack.Navigator>
);

export default AppRoutes;
