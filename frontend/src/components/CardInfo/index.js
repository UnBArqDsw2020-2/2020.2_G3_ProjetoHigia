import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';
import styles from './styles';

const CardInfo = ({ onPress, description, onChangeText, edit }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.description}
        value={description}
        onChangeText={onChangeText}
        editable={edit}
      />

      {edit ? (
        <TouchableOpacity onPress={onPress}>
          <Icon name="trash" size={20} color="#86172D" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default CardInfo;
