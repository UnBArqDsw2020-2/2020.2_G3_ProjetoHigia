import React from 'react';
import { Text, View, KeyboardAvoidingView, Image, Touchable, Platform} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import {css} from '../assets/CSS/Css'

export default function Login(props){
    console.log(props)
    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={css.container}>
            <View>
                <Text style={css.login__Text}>Hígia</Text>
                <Image source={require('../assets/img/icon.png')} />
                {/* <Text style={css.login__msg}>Usuario ou Senha invalidos!</Text> */}
            </View>

            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder='Email:' />
                <TextInput style={css.login__input} placeholder='Senha:' secureTextEntry={true} />

                <View style={css.container2}>
                    <TouchableOpacity style={css.login__button}>
                        <Text style={css.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Cadastro')}>
                        <Text style={css.buttonText1}>Criar uma conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}