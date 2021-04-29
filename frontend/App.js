import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/auth";
import firebase from "firebase";
import apiKeys from "./src/utils/firebaseKeys.js";
import { useFonts, Junge_400Regular } from "@expo-google-fonts/junge";
import AppLoading from "expo-app-loading";
import Routes from "./src/routes";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import LoadingCircle from "./src/components/Loading";
import loadingStore from "./src/store/loading";
import WebSocket from "./src/services/websocket.js";

const App = () => {
	var [fontsLoaded] = useFonts({ Junge_400Regular });

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	WebSocket.connect();

	if (!firebase.apps.length) {
		console.log("Connected with Firebase");
		firebase.initializeApp(apiKeys.firebaseConfig);
	}

	return (
		<Provider store={loadingStore}>
			<NavigationContainer>
				<AuthProvider>
					<StatusBar
						barStyle="light-content"
						backgroundColor="#7E162B"
					/>
					<Routes />
				</AuthProvider>
			</NavigationContainer>
			<LoadingCircle></LoadingCircle>
		</Provider>
	);
};

export default App;
