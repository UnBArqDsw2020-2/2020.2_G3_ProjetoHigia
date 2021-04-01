import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';
import styles from './styles';

const CardEmergencyContact = ({ name, number, edit, onPress, width }) => {
  return (
    <View style={[styles.container, { width: width }]}>
      <View>
        <TextInput style={styles.name} value={name ?? 'Nome'} editable={edit} />

        <TextInput
          style={styles.number}
          value={number ?? 'Número'}
          editable={edit}
        />
      </View>

      {edit ? (
        <TouchableOpacity onPress={onPress}>
          <Icon name="trash" size={20} color="#86172D" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default CardEmergencyContact;
