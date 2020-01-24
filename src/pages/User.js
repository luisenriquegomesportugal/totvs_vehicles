import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { ScrollView } from "react-native-gesture-handler";

import profile_png from "../assets/user.png";

import SessionService from "../services/session";
import UserService from "../services/users";

function User({ navigation }) {
  const user = SessionService.index();
  console.log(user);
  const [userName, setUserName] = useState(user.name);
  const [profile, setProfile] = useState(user.image);

  async function getPermissionAsync() {
    if (Platform.OS === "ios") {
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
      base64: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      setProfile({ uri: `data:image/png;base64,${result.base64}` });
    } else {
      setProfile(null);
    }
  }

  function changeImageProfile() {
    getPermissionAsync();
    _pickImage();
  }

  function onHandleClickSave() {
    UserService.update(
      {
        ...user,
        name: userName,
        image: profile
      },
      true
    );
    alert("Salvo com sucesso");
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ScrollView>
        <View style={styles.ScrollView}>
          <TouchableOpacity
            onPress={changeImageProfile}
            style={styles.imgContainer}
          >
            <Image source={profile || profile_png} style={styles.profileLogo} />
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

          <TouchableOpacity style={styles.button} onPress={onHandleClickSave}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("ChangePass")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Alterar Senha</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    padding: 15
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
    backgroundColor: "#fff"
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
