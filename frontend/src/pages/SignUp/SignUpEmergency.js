import React from 'react';
import { Text, View, Platform, Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../../../assets/CSS/styles';

export default function SignUpEmergency(props){
    return (
        <View style={styles.container}>
            <View style={styles.login__form}>
                <Text style={{fontSize: 25, alignSelf:'center', fontWeight:'bold'}}>Contato de emergência</Text>
                <TextInput style={styles.login__input} placeholder='Nome completo' />
                <TextInput style={styles.login__input} placeholder='Celular' />
                <TextInput style={styles.login__input} placeholder='Relação' />
                
                <View style={styles.container3}>
                    <TouchableOpacity style={styles.cadastroButton}>
                        <Text style={styles.buttonText} >Finalizar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}