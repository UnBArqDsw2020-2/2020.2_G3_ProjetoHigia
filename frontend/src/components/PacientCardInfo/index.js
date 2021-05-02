import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";

const PacientCardInfo = ({
	onPress,
	description,
	exam,
	edit,
}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.description}>{description}</Text>
			{exam ? (
				<TouchableOpacity onPress={onPress}>
					{edit ? (
						<FontAwesome name="trash" size={20} color="#86172D" />
					) : (
						<Icon name="file-download" size={20} color="#86172D" />
					)}
				</TouchableOpacity>
			) : null}
		</View>
	);
};

export default PacientCardInfo;
