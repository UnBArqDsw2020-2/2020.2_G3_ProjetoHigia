import React from 'react';
import { Text, View, Platform, Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { css } from '../assets/CSS/Css'

export default function CadastroContatoEmergencia(props){
    return (
        <View style={css.container}>
            <View style={css.login__form}>
                <Text style={{fontSize: 25, alignSelf:'center', fontWeight:'bold'}}>Contato de emergência</Text>
                <TextInput style={css.login__input} placeholder='Nome completo:' />
                <TextInput style={css.login__input} placeholder='Celular:' />
                <TextInput style={css.login__input} placeholder='Relação:' />
                
                <View style={css.container3}>
                    <TouchableOpacity style={css.cadastroButton}>
                        <Text style={css.buttonText}>Finalizar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}