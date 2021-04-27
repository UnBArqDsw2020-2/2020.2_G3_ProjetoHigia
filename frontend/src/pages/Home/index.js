import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MedicalReport from "../MedicalReport";
import SearchPatient from "../SearchPatient";
import EditProfile from "../../pages/EditProfile";
import Files from "../Files";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../../context/auth";

export default function Home() {
	const Tab = createBottomTabNavigator();
	const { currentUser } = useAuth();

	return (
		<Tab.Navigator
			tabBarOptions={{
				activeBackgroundColor: "#7E162B",
				activeTintColor: "#FFF",
				inactiveBackgroundColor: "#EFEFEF",
			}}
		>
			<Tab.Screen
				name="Perfil"
				component={MedicalReport}
				options={{
					tabBarIcon: () => (
						<MaterialIcons
							name="account-circle"
							size={25}
							color="white"
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Arquivos"
				component={Files}
				options={{
					tabBarIcon: () => (
						<MaterialIcons name="archive" size={25} color="white" />
					),
				}}
			/>
			{/* {currentUser.crm ? ( */}
			{currentUser ? (
				<Tab.Screen
					name="Buscar"
					component={SearchPatient}
					options={{
						tabBarIcon: () => (
							<MaterialIcons
								name="search"
								size={25}
								color="white"
							/>
						),
					}}
				/>
			) : null}
			<Tab.Screen
				name="Configuração"
				component={EditProfile}
				options={{
					tabBarIcon: () => (
						<MaterialIcons name="build" size={25} color="white" />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
