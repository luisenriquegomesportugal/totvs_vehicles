import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import { ScrollView } from "react-native-gesture-handler";

import profile_png from "../assets/user.png";
import camera from "../assets/camera.png";
import upload_png from "../assets/envio.png";

function User() {
  const [userName, setUserName] = useState("jon silva");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");

  const [profile, setProfile] = useState(profile_png);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  async function getPermissionAsync() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  }

  async function _pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      setProfile(result);
    }
  }

  function changeImageProfile() {
    getPermissionAsync();
    _pickImage();
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  // if (hasPermission === null) {
  //   return <Camera style/>;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={100}
      enabled
    >
      <ScrollView>
        <View style={styles.ScrollView}>
          <View style={styles.containerLogo}>
            <TouchableOpacity
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Image source={camera} style={styles.starLogo} />
            </TouchableOpacity>

            <TouchableOpacity onPress={changeImageProfile}>
              <Image source={upload_png} style={styles.starLogo} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={changeImageProfile}
            style={styles.imgContainer}
          >
            <Image source={profile} style={styles.profileLogo} />
          </TouchableOpacity>
          <Text style={styles.textName}>{userName}</Text>

          <View>
            <Text style={styles.text}>Alterar Nome: </Text>
            <TextInput
              style={styles.inputText}
              placeholder={userName}
              onChangeText={setUserName}
              value={userName}
            />
          </View>

          <View>
            <Text style={styles.text}>Digite um nova Senha: </Text>
            <TextInput
              secureTextEntry={true}
              style={styles.inputText}
              placeholder={userPassword}
              onChangeText={setUserPassword}
              value={userPassword}
            />
          </View>

          <View>
            <Text style={styles.text}>Confirme sua nova Senha: </Text>
            <TextInput
              secureTextEntry={true}
              style={styles.inputText}
              placeholder={userPassword}
              onChangeText={setUserPassword}
              value={userPassword}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1"
  },
  ScrollView: {
    alignItems: "center",
    justifyContent: "center"
  },
  imgContainer: {
    width: 150,
    aspectRatio: 1,
    // height: 150,
    borderRadius: 80,
    // marginHorizontal: "20%",
    alignItems: "center",
    paddingTop: 0,
    justifyContent: "center",
    backgroundColor: "#3B83Bd"
  },
  containerLogo: {
    alignSelf: "flex-end",
    paddingLeft: 20,
    marginRight: 30,
    flexDirection: "row"
  },
  profileLogo: {
    width: 150,
    height: 150,
    borderRadius: 80
  },
  starLogo: {
    marginTop: 15,
    marginLeft: 10,
    padding: 10,
    width: 25,
    height: 25
  },
  textName: {
    fontSize: 20,
    alignSelf: "center",
    justifyContent: "center",
    fontWeight: "bold"
  },
  text: {
    paddingTop: 40
  },
  inputText: {
    width: 280,
    height: 60,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#999"
  },
  button: {
    backgroundColor: "#3B83Bd",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 15
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff"
  }
});

export default User;
