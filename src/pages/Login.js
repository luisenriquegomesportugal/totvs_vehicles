import React, {useState, useCallback} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import UserService from "../services/users";
import SessionService from "../services/session";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onHandleLogin = useCallback(async () => {
        const user = await UserService.show(email);

        if(!user) {
            alert("Usuário não cadastrado");
            return;
        }

        if(user.password !== password) {
            alert("Senha incorreta");
            return;
        }

        await SessionService.create(user);
        alert("logado");
    });

    return (
        <View style={StyleSheet.container}>
            <TextInput 
                onChangeText={text => setEmail(text)} 
                value={email} 
                style={styles.email} />
            <TextInput 
                onChangeText={text => setPassword(text)} 
                value={password} 
                style={styles.password} 
                secureTextEntry />
            <TouchableOpacity 
                onPress={onHandleLogin} 
                style={styles.button}>
                <Text style={styles.buttonText}>Logar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D3D3D3'
    },
    email: {
        width: 300,
        height: 24,
        paddingBottom: 10
    },
    password: {
        width: 300,
        height: 24,
        paddingBottom: 10
    },
    button: {
        width: 300,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3B83Bd',
        borderRadius: 2
    },
    buttonText: {
        fontWeight: 'bold'
    }
});
