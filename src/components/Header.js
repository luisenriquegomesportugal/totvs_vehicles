import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import SessionService from "../services/session";
import profile from "../assets/user.png";

export default function Header({ navigation }) {
  const user = SessionService.index();

  function onHandleClickLogout() {
    SessionService.destroy();
    navigation.navigate("Login");
  }

  function onHandleClickImageHeader() {
    navigation.navigate("User");
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onHandleClickImageHeader}>
        <Image source={user.image || profile} style={styles.profile} />
      </TouchableOpacity>
      <View style={styles.info}>
        <Text style={styles.apresentation}>{user.profile || "Sem perfil"}</Text>
        <Text style={styles.name}>{user.name || "Nome desconhecido"}</Text>
      </View>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={onHandleClickLogout}
      >
        <FontAwesome name="sign-out" size={25} color={"#fff"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 65,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#3B83Bd",
    elevation: 2,
    shadowOpacity: 0.3,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 }
  },
  info: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 10
  },
  profile: {
    width: 48,
    height: 48,
    margin: 10,
    borderRadius: 50,
    backgroundColor: "#fff"
  },
  apresentation: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "300"
  },
  name: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "400"
  },
  logoutButton: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center"
  }
});
