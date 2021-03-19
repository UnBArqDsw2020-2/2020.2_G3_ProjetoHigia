import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';
import styles from './styles';

const Card = ({
  emergencyContact,
  onPress,
  value,
  onChangeText,
  edit,
  name,
  number,
}) => {
  return (
    <View style={[styles.container]}>
      <View>
        {edit ? (
          <Text
            style={[
              styles.description,
              { color: emergencyContact ? '#86172D' : '#39393a' },
            ]}
          >
            {name}
          </Text>
        ) : (
          <TextInput value={value} onChangeText={onChangeText} />
        )}
        {emergencyContact ? (
          <Text style={styles.description}>{number}</Text>
        ) : null}
      </View>

      {edit ? null : (
        <TouchableOpacity onPress={onPress}>
          <Icon name="trash" size={20} color="#86172D" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Card;
