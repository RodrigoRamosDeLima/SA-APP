import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Keyboard,
  Platform,
  Alert,
} from 'react-native';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório.'),
  email: yup.string().email('Por favor, insira um e-mail válido.').required('O e-mail é obrigatório.'),
  password: yup.string().min(4, 'A senha deve conter mais de 4 caracteres.').required('A senha é obrigatória.'),
});

export default function Cadastro({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await validationSchema.validate({ name, email, password });
      // Aqui você deve registrar o usuário no seu banco de dados
      Alert.alert('Sucesso', 'Cadastro efetuado com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#fff" translucent={false} />
          <Image source={require('../Login/img/color_transparent.png')} style={styles.logo} />
          
          <TextInput placeholder='Nome' style={styles.input} onChangeText={setName} value={name} />
          <TextInput placeholder='E-mail' style={styles.input} onChangeText={setEmail} value={email} />
          <TextInput
            placeholder='Sua senha'
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
            <Text style={styles.loginText}>Cadastrar</Text>
          </TouchableOpacity>

          <View style={styles.divisor}>
            <View style={styles.divisorLine}></View>
            <Text style={{ marginHorizontal: '3%', color: '#c4c4c4' }}> OU</Text>
            <View style={styles.divisorLine}></View>
          </View>
          <View style={styles.signUpContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signUpButton}>Voltar para Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 350,
      },
    logo: {
        width: '110%',
        height: '20%',
        paddingTop: '50%',
        marginTop: Platform.OS === 'android' ? '13%' : '20%',
        marginBottom: Platform.OS === 'android' ? '13%' : '15%',
      },
      input: {
        width: '87%',
        height: 46,
        backgroundColor: '#999',
        marginBottom: 20,
        padding: 8,
        borderRadius: 5,
      },
    loginButton: {
        marginTop: '5%',
        backgroundColor: '#8a08bb',
        width: '87%',
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      },
      loginText: {
        color: '#fff',
        fontSize: 17,
      },
      divisor: {
        flexDirection: 'row',
        marginTop: '10%',
        width: '87%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      divisorLine: {
        width: '45%',
        height: 1,
        backgroundColor: '#c4c4c4',
        borderRadius: 5,
      },
      signUpContainer: {
        flexDirection: 'row',
        marginTop: '10%',
      },
      signUpText: {
        color: '#c4c4c4',
        paddingRight: 5,
      },
      signUpButton: {
        color: '#8a08bb',
        fontWeight: 'bold',
        fontSize: 20
      },
    });