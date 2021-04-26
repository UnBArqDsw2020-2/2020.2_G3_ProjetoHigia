import React, { useState } from "react";
import Animated, { Easing, timing } from "react-native-reanimated";
import { TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
import api from "../../services/api";

const buttonsTransleY = new Animated.Value(0);
const BUTTON_MAX_HEIGHT = 120;
const BUTTON_MIN_HEIGHT = 0;

const HelpButtonAnimated = Animated.createAnimatedComponent(TouchableOpacity);

const FloatingButton = ({ setEdit, edit, dataToSave, resetData, cpf }) => {
	const [isButtonsVisible, setButtonsVisible] = useState(false);
	const toggleButtonsVisibility = () => {
		if (isButtonsVisible) {
			hideButtons();
			resetData()
		} else {
			showButtons();
		}
	};

	const showButtons = () => {
		const showButtonsConfig = {
			duration: 150,
			toValue: BUTTON_MAX_HEIGHT,
			easing: Easing.inOut(Easing.ease),
		};
		timing(buttonsTransleY, showButtonsConfig).start();
		setButtonsVisible(true);
	};

	const hideButtons = () => {
		const hideButtonsConfig = {
			duration: 150,
			toValue: BUTTON_MIN_HEIGHT,
			easing: Easing.inOut(Easing.ease),
		};
		timing(buttonsTransleY, hideButtonsConfig).start();
		setButtonsVisible(false);
	};

	const renderEditButton = () => (
		<Animated.View style={styles.plusButtonView}>
			<TouchableOpacity
				style={[
					styles.plusButton,
					{ backgroundColor: edit ? "#FF0000" : "#86172D" },
				]}
				activeOpacity={1}
				onPress={() => {
					toggleButtonsVisibility();
					setEdit();
				}}
			>
				{edit ? (
					<MaterialIcons name="close" size={30} color="#FFF" />
				) : (
					<MaterialIcons name="create" size={24} color="#fff" />
				)}
			</TouchableOpacity>
		</Animated.View>
	);

	const renderSaveButton = () => (
		<HelpButtonAnimated
			onPress={() => {
				const saveData = {
					cpf: cpf,
					data: {
						medicines: dataToSave[0],
						allergies: dataToSave[1],
						comorbidities: dataToSave[2],
						contacts: dataToSave[3],
					},
				};
				api.put("/medicalReport", saveData);
			}}
			style={[
				styles.helpButtonView,
				{
					transform: [
						{
							translateY: buttonsTransleY.interpolate({
								inputRange: [
									BUTTON_MIN_HEIGHT,
									BUTTON_MAX_HEIGHT,
								],
								outputRange: [0, -BUTTON_MAX_HEIGHT / 2],
							}),
						},
					],
				},
			]}
		>
			<View style={[styles.helpButton, { backgroundColor: "#86172D" }]}>
				<MaterialIcons name="save" size={30} color="#FFF" />
			</View>
		</HelpButtonAnimated>
	);

	return (
		<>
			{renderEditButton()}
			{renderSaveButton()}
		</>
	);
};

export default FloatingButton;
