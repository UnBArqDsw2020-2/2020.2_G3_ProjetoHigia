import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Button = ({ title, onPress, disabled, defaultButton }) => {
	return (
		<TouchableOpacity
			style={
				disabled || defaultButton
					? styles.buttonContainer
					: { ...styles.buttonContainer, opacity: 0.5 }
			}
			onPress={onPress}
			disabled={defaultButton ? false : !disabled}
		>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};

export default Button;
