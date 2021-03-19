import React, { useState } from 'react';
import Animated, { Easing, timing } from 'react-native-reanimated';
import { TouchableOpacity, View } from 'react-native';
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import styles from './styles';

const buttonsTransleY = new Animated.Value(0);
const BUTTON_MAX_HEIGHT = 120;
const BUTTON_MIN_HEIGHT = 0;

const HelpButtonAnimated = Animated.createAnimatedComponent(TouchableOpacity);

const FloatingButton = ({ setEdit, edit }) => {
  const [isButtonsVisible, setButtonsVisible] = useState(false);
  const toggleButtonsVisibility = () => {
    if (isButtonsVisible) {
      hideButtons();
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
          { backgroundColor: edit ? '#86172D' : '#FF0000' },
        ]}
        activeOpacity={1}
        onPress={() => {
          toggleButtonsVisibility();
          setEdit();
        }}
      >
        {edit ? (
          <MaterialCommunityIcons name="pencil" size={30} color="#fff" />
        ) : (
          <FontAwesome name="close" size={30} color="#FFF" />
        )}
      </TouchableOpacity>
    </Animated.View>
  );

  const renderSaveButton = () => (
    <HelpButtonAnimated
      onPress={() => {}}
      style={[
        styles.helpButtonView,
        {
          transform: [
            {
              translateY: buttonsTransleY.interpolate({
                inputRange: [BUTTON_MIN_HEIGHT, BUTTON_MAX_HEIGHT],
                outputRange: [0, -BUTTON_MAX_HEIGHT / 2],
              }),
            },
          ],
        },
      ]}
    >
      <View style={[styles.helpButton, { backgroundColor: '#86172D' }]}>
        <FontAwesome5 name="save" size={30} color="#FFF" />
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
