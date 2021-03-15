import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, Image, Touchable, Platform} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';
import {css} from '../assets/CSS/Css';
import { useAuth } from '../../context/auth';

export default function Login(props){
    const { signIn } = useAuth();
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(props)
    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={css.container}>
            <View>
                <Text style={css.login__Text}>Hígia</Text>
                <Image source={require('../assets/img/icon.png')} />
                {/* <Text style={css.login__msg}>Usuario ou Senha invalidos!</Text> */}
            </View>

            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder='Email' value={email} onChangeText={setEmail}/>
                <TextInput style={css.login__input} placeholder='Senha' secureTextEntry={true} value={password} onChangeText={setPassword}/>

                <View style={css.container2}>
                    <TouchableOpacity style={css.login__button} onPress={() => signIn({email}, {password})}>
                        <Text style={css.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={css.buttonText1}>Criar uma conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}