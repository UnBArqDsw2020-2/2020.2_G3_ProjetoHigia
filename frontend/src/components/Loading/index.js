import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./style";

export default function LoadingCircle(show = false) {
	const { showLoading } = apiContext;

	if (showLoading) {
		return (
			<View style={styles.container}>
				<ActivityIndicator
					size="large"
					animating={show}
					color="#86172D"
				/>
			</View>
		);
	}
}
