import React from 'react';
import { Text, View, Platform} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {css} from '../../../assets/CSS/Css';

export default function SignUpPatient(props){
    const navigation = useNavigation();
    return (
        <View style={css.container}>
            <View style={css.login__form}>
                <Text style={css.cadastroText}>Dados para Perfil</Text>
                <TextInput style={css.login__input} placeholder='Primeiro Nome' />
                <TextInput style={css.login__input} placeholder='Ultimo Nome' />
                <TextInput style={css.login__input} placeholder='Data de Nascimento' />
                <TextInput style={css.login__input} placeholder='CPF' />
                <TextInput style={css.login__input} placeholder='Altura' />
                <TextInput style={css.login__input} placeholder='Peso' />
                <TextInput style={css.login__input} placeholder='Tipo Sanguineo' />
                
                <View style={css.container3}>
                    <TouchableOpacity style={css.cadastroButton}>
                        <Text style={css.buttonText} onPress={() => navigation.navigate('SignUpEmergency')}>Proximo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}