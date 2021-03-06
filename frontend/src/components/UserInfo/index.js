import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const UserInfo = ({ name, age, height, weight, photo }) => {
	return (
		<View style={styles.infoUser}>
			{photo ? (
				<Image source={{ uri: `data:image/png;base64,${photo}` }} />
			) : (
				<Image source={require("../../../assets/profile.png")} />
			)}

			<View style={styles.dataUser}>
				<Text style={styles.userName}>{name}</Text>
				<Text>{age} anos</Text>

				<View style={styles.heightWeight}>
					<Text>{height} cm</Text>
					<Text>{weight} kg</Text>
				</View>
			</View>
		</View>
	);
};

export default UserInfo;
