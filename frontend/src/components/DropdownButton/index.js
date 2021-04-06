import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';

const DropdownButton = ({ title, onPress }) => {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <View style={styles.dropdownContainer}>
      <Picker
        selectedValue={selectedValue}
        style={styles.dropdownButtonContainer}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Selecione o Estado" value="" />
        <Picker.Item label="Acre" value="AC" />
        <Picker.Item label="Alagoas" value="AL" />
        <Picker.Item label="Amapá" value="AP" />
        <Picker.Item label="Amazonas" value="AM" />
        <Picker.Item label="Bahia" value="BA" />
        <Picker.Item label="Ceará" value="CE" />
        <Picker.Item label="Distrito Federal" value="DF" />
        <Picker.Item label="Espírito Santo" value="ES" />
        <Picker.Item label="Goiás" value="GO" />
        <Picker.Item label="Maranhão" value="MA" />
        <Picker.Item label="Mato Grosso" value="MT" />
        <Picker.Item label="Mato Grosso do Sul" value="MS" />
        <Picker.Item label="Minas Gerais" value="MG" />
        <Picker.Item label="Pará" value="PA" />
        <Picker.Item label="Paraíba" value="PB" />
        <Picker.Item label="Paraná" value="PR" />
        <Picker.Item label="Pernambuco" value="PE" />
        <Picker.Item label="Piauí" value="PI" />
        <Picker.Item label="Rio de Janeiro" value="RJ" />
        <Picker.Item label="Rio Grande do Norte" value="RN" />
        <Picker.Item label="Rondônia" value="RO" />
        <Picker.Item label="Roraima" value="RR" />
        <Picker.Item label="Santa Catarina" value="SC" />
        <Picker.Item label="São Paulo" value="SP" />
        <Picker.Item label="Sergipe" value="SE" />
        <Picker.Item label="Tocantins" value="TO" />
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
