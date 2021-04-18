import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./style";
import { useSelector, Provider } from "react-redux";

function LoadingCircle() {
	const loading = useSelector((state) => state.loading);

	console.log("loading:", loading);

	if (loading) {
		return (
			<View style={styles.container}>
				<ActivityIndicator
					size="large"
					animating={loading}
					color="#86172D"
				/>
			</View>
		);
	} else {
		return <></>;
	}
}

export default LoadingCircle;
