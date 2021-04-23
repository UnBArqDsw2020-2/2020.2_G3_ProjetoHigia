import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Button = ({ title, onPress, disabled }) => {
	return (
		<TouchableOpacity
			style={
				disabled
					? styles.buttonContainer
					: { ...styles.buttonContainer, opacity: 0.5 }
			}
			onPress={onPress}
			disabled={!disabled}
		>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};

export default Button;
