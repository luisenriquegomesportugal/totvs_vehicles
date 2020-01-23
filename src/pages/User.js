import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function User() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => {}} style={styles.img}>
          <MaterialIcons name="perm_identity" size={20} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.star}>
          <MaterialIcons name="star" size={20} color="#FFF" />
        </TouchableOpacity>

        <TextInput
          style={{ height: 40 }}
          placeholder="Alterar Nome"
          onChangeText={setUserName}
          value={userName}
        />

        <TextInput
          style={{ height: 40 }}
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginLeft: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B83Bd"
  },
  fav: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ccc"
  }
});

export default User;
