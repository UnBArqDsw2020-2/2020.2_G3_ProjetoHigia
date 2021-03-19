import React from 'react';
import { Text, View, Platform} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import SignUpEmergency from './SignUpEmergency'
import styles from './styles';

export default function SignUpDoctor(props){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.text}>Dados para Perfil</Text>
                <TextInput style={styles.inputText} placeholder='Primeiro Nome' />
                <TextInput style={styles.inputText} placeholder='Ultimo Nome' />
                <TextInput style={styles.inputText} placeholder='Data de Nascimento' />
                <TextInput style={styles.inputText} placeholder='CPF' />
                <TextInput style={styles.inputText} placeholder='CRM' />
                <TextInput style={styles.inputText} placeholder='Altura' />
                <TextInput style={styles.inputText} placeholder='Peso' />
                <TextInput style={styles.inputText} placeholder='Tipo Sanguineo' />
                
                <View style={styles.container1}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}  onPress={() => navigation.navigate('SignUpEmergency')}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}