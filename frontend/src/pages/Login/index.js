import React, { useState } from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  Platform,
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { useAuth } from '../../context/auth';

const Login = (props) => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.fieldsView}>
        <Image
          source={require('../../../assets/img/iconBackground.png')}
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
            marginBottom: 20,
          }}
        />

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder={'Email'}
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder={'Senha'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <View style={styles.container2}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => signIn(email, password)}
            >
              <Text style={styles.btnText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SignUp')}
              style={styles.btn1}
            >
              <Text style={styles.btnText1}>Criar uma conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
