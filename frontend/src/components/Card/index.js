import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Card = ({ emergencyContact }) => {
  return (
    <View style={[styles.container]}>
      <View>
        {emergencyContact ? (
          <Text style={[styles.description, { color: '#86172D' }]}>
            descrição
          </Text>
        ) : null}
        <Text style={styles.description}>descrição</Text>
      </View>
      <View />
    </View>
  );
};

export default Card;
