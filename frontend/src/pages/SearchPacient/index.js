import React from 'react'
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { MaterialIcons as Icon } from '@expo/vector-icons'

const SearchPacient = () => {
    return (
        <ImageBackground 
          style={styles.container}
          source={require('../../../assets/logo.jpg')} 
          imageStyle={{width: '100%', height: '100%'}}
        >
            <View style={styles.inputContainer}> 
              <Icon name="search" color="#BABABA" size={30}/>
              <TextInput style={styles.searchInput} placeholder="CPF do Paciente"/>
            </View>

            <Text style={styles.pacientName}> Paciente - Fulano </Text>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button} onPress={()=>{}}>
                <Text style={styles.buttonText}> Ficha Médica </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={()=>{}}>
                <Text style={styles.buttonText}> Arquivos </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={()=>{}}>
                <Text style={styles.buttonText}> Solicitar Acesso </Text>
              </TouchableOpacity>
            </View>

        </ImageBackground>
    )
};

export default SearchPacient;