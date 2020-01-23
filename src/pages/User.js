import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";

import { Camera } from "expo-camera";
import camera from "../assets/camera.png";
import profile from "../assets/user.png";

function User() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {}, []);

  function changeImageProfile() {}

  return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
              onPress={changeImageProfile}
              style={styles.imgContainer}
          >
            <Image source={profile} style={styles.profileLogo} />
          </TouchableOpacity>

          <TouchableOpacity onPress={changeImageProfile} style={styles.star}>
            <Image source={camera} style={styles.starLogo} />
          </TouchableOpacity>

          <Text>Nome: </Text>
          <TextInput
              style={styles.inputText}
              placeholder="Alterar Nome"
              onChangeText={setUserName}
              value={userName}
          />

          <Text>Senha: </Text>
          <TextInput
              style={styles.inputText}
              placeholder="Senha"
              onChangeText={setUserPassword}
              value={userPassword}
          />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  imgContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginHorizontal: 30,
    alignItems: "center",
    paddingTop: 30,
    justifyContent: "center",
    backgroundColor: "#3B83Bd"
  },
  profileLogo: {
    width: 200,
    height: 200
  },
  starLogo: {
    width: 25,
    height: 25
  },
  star: {
    width: 50,
    height: 10,
    borderRadius: 10,
    marginLeft: 15,
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 40,
    justifyContent: "center",
    backgroundColor: "#ccc"
  },
  inputText: {
    width: 280,
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#999"
  }
});

export default User;
