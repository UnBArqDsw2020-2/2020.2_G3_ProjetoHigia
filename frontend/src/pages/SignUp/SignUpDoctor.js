import React from 'react';
import { Text, View, Platform} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../assets/CSS/styles';

export default function SignUpDoctor(props){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.login__form}>
                <Text style={styles.cadastroText}>Dados para Perfil</Text>
                <TextInput style={styles.login__input} placeholder='Primeiro Nome' />
                <TextInput style={styles.login__input} placeholder='Ultimo Nome' />
                <TextInput style={styles.login__input} placeholder='Data de Nascimento' />
                <TextInput style={styles.login__input} placeholder='CPF' />
                <TextInput style={styles.login__input} placeholder='CRM' />
                <TextInput style={styles.login__input} placeholder='Altura' />
                <TextInput style={styles.login__input} placeholder='Peso' />
                <TextInput style={styles.login__input} placeholder='Tipo Sanguineo' />
                
                <View style={styles.container3}>
                    <TouchableOpacity style={styles.cadastroButton}>
                        <Text style={styles.buttonText}  onPress={() => navigation.navigate('SignUpEmergency')}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}