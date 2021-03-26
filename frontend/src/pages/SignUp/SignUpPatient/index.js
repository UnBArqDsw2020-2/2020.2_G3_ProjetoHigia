import React from 'react';
import { Text, View, ImageBackground} from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles';

export default function SignUpPatient(props){
    const navigation = useNavigation();
    const route = useRoute();
    const params = route.params;
    return (
        <ImageBackground style={styles.container} source={require('../../../../assets/img/background.jpg')} imageStyle={{ width: '100%', height: '100%' }}>
        <ScrollView style={{ flex: 1, marginTop: "20%" }}>
            <View style={styles.form}>
                <Text style={styles.text}>Dados para Perfil</Text>
                <TextInput style={styles.inputText} placeholder='Primeiro Nome' />
                <TextInput style={styles.inputText} placeholder='Ultimo Nome' />
                <TextInput style={styles.inputText} placeholder='Data de Nascimento' />
                <TextInput style={styles.inputText} placeholder='CPF' />
                <TextInput style={styles.inputText} placeholder='Altura' />
                <TextInput style={styles.inputText} placeholder='Peso' />
                <TextInput style={styles.inputText} placeholder='Tipo Sanguineo' />
                <View s tyle={styles.container1}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText} onPress={() => navigation.navigate('SignUpEmergency')}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        </ImageBackground>
    );
}