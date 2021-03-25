import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';

const PacientCardInfo = ({ onPress, description, exam }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{description}</Text>

      {exam ? (
        <TouchableOpacity onPress={onPress}>
          <Icon name="download" size={20} color="#86172D" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default PacientCardInfo;
