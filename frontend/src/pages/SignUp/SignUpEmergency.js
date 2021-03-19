import React from 'react';
import { Text, View, Platform, Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

export default function SignUpEmergency(props){
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={{fontSize: 25, alignSelf:'center', fontWeight:'bold'}}>Contato de emergência</Text>
                <TextInput style={styles.inputText} placeholder='Nome completo' />
                <TextInput style={styles.inputText} placeholder='Celular' />
                <TextInput style={styles.inputText} placeholder='Relação' />
                
                <View style={styles.container1}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText} >Finalizar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}