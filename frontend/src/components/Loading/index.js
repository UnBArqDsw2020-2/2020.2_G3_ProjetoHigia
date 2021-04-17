import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./style";

export default function LoadingCircle() {
	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color="#86172D" />
		</View>
	);
}
