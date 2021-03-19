import React from 'react';
import { Text, View, Platform} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function SignUp(props){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.text}>Dados para Login</Text>
                <TextInput style={styles.inputText} placeholder='Email ' />
                <TextInput style={styles.inputText} placeholder='Senha ' secureTextEntry={true} />
                <Text style={styles.text1}>Você deseja se cadastrar como:</Text>
                
                <View style={styles.container1}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText} onPress={()=> navigation.navigate('SignUpDoctor')}>Médico</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText} onPress={()=> navigation.navigate('SignUpPatient')}>Paciente</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}