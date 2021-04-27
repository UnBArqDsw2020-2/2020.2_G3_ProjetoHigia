import React from "react";
import { View} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import styles from "./styles";

const DropdownButton = ({ value, setValue, mock }) => {
	return (
		<View style={styles.dropdownContainer}>
			<Picker
				selectedValue={value}
				style={styles.dropdownButtonContainer}
				onValueChange={(itemValue) => setValue(itemValue)}
			>
				{mock.map((state, index) => (
					<Picker.Item
						label={state.label}
						value={state.value}
						key={index}
					/>
				))}
			</Picker>

			<View style={styles.iconContainer}>
				<Icon
					name="keyboard-arrow-down"
					size={30}
					color="#7E162B"
					style={styles.icon}
				/>
			</View>
		</View>
	);
};

export default DropdownButton;
