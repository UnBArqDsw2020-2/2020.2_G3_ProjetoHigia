import React from 'react';
import { Text, View, Platform} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { css } from '../assets/CSS/Css'

export default function Cadastro(props){
    return (
        <View style={css.container}>
            <View style={css.login__form}>
                <Text style={css.cadastroText}>Dados para Login</Text>
                <TextInput style={css.login__input} placeholder='Email:' />
                <TextInput style={css.login__input} placeholder='Senha:' secureTextEntry={true} />
                <Text style={css.cadastroText1}>Você deseja se cadastrar como:</Text>
                
                <View style={css.container3}>
                    <TouchableOpacity style={css.cadastroButton}>
                        <Text style={css.buttonText} onPress={()=>props.navigation.navigate('CadastroMedico')}>Medico</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.cadastroButton}>
                        <Text style={css.buttonText} onPress={()=>props.navigation.navigate('CadastroPaciente')}>Paciente</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}