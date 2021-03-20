import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { MaterialIcons } from '@expo/vector-icons';

export default function SignUpEmergency(props){
    return (
        <ImageBackground style={styles.container} source={require('../../../assets/img/background.jpg')} imageStyle={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={{fontSize: 25, alignSelf:'center', fontWeight:'bold', marginBottom: 40}}>Contato de emergência</Text>
                <TextInput style={styles.inputText} placeholder='Nome completo' />
                <TextInput style={styles.inputText} placeholder='Celular' />
                <TextInput style={styles.inputText} placeholder='Relação' />
                
                <TouchableOpacity>
                    <MaterialIcons name='add-circle' size = {30} color='#7E162B' style={{alignSelf: 'flex-end'}} />
                </TouchableOpacity>

                <View style={styles.container1}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText} >Finalizar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </ImageBackground>
    );
}