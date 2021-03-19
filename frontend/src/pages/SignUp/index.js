import React from 'react';
import { Text, View, Platform} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../assets/CSS/styles';

export default function SignUp(props){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.login__form}>
                <Text style={styles.cadastroText}>Dados para Login</Text>
                <TextInput style={styles.login__input} placeholder='Email ' />
                <TextInput style={styles.login__input} placeholder='Senha ' secureTextEntry={true} />
                <Text style={styles.cadastroText1}>Você deseja se cadastrar como:</Text>
                
                <View style={styles.container3}>
                    <TouchableOpacity style={styles.cadastroButton}>
                        <Text style={styles.buttonText} onPress={()=> navigation.navigate('SignUpDoctor')}>Médico</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cadastroButton}>
                        <Text style={styles.buttonText} onPress={()=> navigation.navigate('SignUpPatient')}>Paciente</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}