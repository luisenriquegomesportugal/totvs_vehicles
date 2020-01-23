import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, KeyboardAvoidingView, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import UserService from "../services/users";
import SessionService from "../services/session";

import car from '../assets/car.png';

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
      if(!SessionService.index()){
        navigation.navigate('Home');
      }
    }, []);

    function onHandleLogin() {
       const user = UserService.show(email);

        if(!user) {
            alert("Usuário não cadastrado");
            return;
        }

        if(user.password !== password) {
            alert("Senha incorreta");
            return;
        }

        SessionService.create(user);
        navigation.navigate('Home');
    }

    return (
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView style={styles.content} behavior="padding" enabled>
            <View  style={styles.logoContainer}>
              <Image style={styles.logo} source={car} />
            </View>
            <View style={styles.actionsContainer}>
              <TextInput 
                  onChangeText={text => setEmail(text)} 
                  value={email} 
                  style={styles.email}
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCompleteType="email" />
              <TextInput 
                  onChangeText={text => setPassword(text)} 
                  value={password} 
                  style={styles.password}
                  placeholder="Senha" 
                  autoCapitalize="none"
                  autoCompleteType="password"
                  secureTextEntry />
              <TouchableOpacity 
                  onPress={onHandleLogin} 
                  style={styles.button}>
                  <Text style={styles.buttonText}>Logar</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f1f1'
    },
    content: {
        flex: 1
    },
    logoContainer:{
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo:{
      width: 96,
      height: 96
    },
    actionsContainer:{
      flex: 1
    },
    email: {
        width: 280,
        height: 40,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#999'
    },
    password: {
        width: 280,
        height: 40,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#999'
    },
    button: {
        width: 280,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3B83Bd',
        borderRadius: 5,
        marginTop: 10
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#ffffff'
    }
});
