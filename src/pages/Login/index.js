import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#fff" translucent={false} />
          <Image source={require('./src/img/color_transparent.png')} style={styles.logo} />
          <TextInput placeholder='Celular, username ou email' style={styles.input} />
          <TextInput placeholder='Sua senha' style={styles.input} />

          <View style={styles.forgotContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Acessar</Text>
          </TouchableOpacity>

          <View style={styles.divisor}>
            <View style={styles.divisorLine}></View>
            <Text style={{ marginHorizontal: '3%', color:'#c4c4c4' }}> OU</Text>
            <View style={styles.divisorLine}></View>
          </View>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Não possui uma conta?</Text>
            <TouchableOpacity>
              <Text style={styles.signUpButton}>Cadastre-se!</Text>
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
    paddingBottom: 350
  },
  logo: {
    width:'110%',
    height:'20%',
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
  forgotContainer: {
    width: '90%',
    alignItems: 'flex-end',
  },
  forgotText: {
    color: '#8a08bb',
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
    fontWeight: 'bold'
  },
});