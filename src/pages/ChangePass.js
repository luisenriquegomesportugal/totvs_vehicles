import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import SessionService from '../services/session'
import UserService from '../services/users'

function User() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit() {
    if(password != confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    let usuario = SessionService.index()
    usuario = {...usuario, password: password};

    UserService.update(usuario);
    alert('Senha atualizada com sucesso!');

    const teste = {
      image: {},
      name: "Luis Portugal",
        email: "luis",
        password: "secret",
        profile: "Usuário"
      }
    }

  return (
    <View style={styles.container}>
    <View>
      <TextInput
        style={styles.inputText}
        placeholder="Digite sua nova senha"
        onChangeText={setPassword}
        value={password}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Confirme a sua nova senha"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
    </View>

    <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
      <Text style={styles.buttonText}>Alterar senha</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    color: '#fff',
    padding: 15,
  },
  inputText: {
    // width: 280,
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3B83Bd',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default User;
