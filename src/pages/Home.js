import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import CarList from "../components/CarList";

import SessionService from "../services/session";
import VehiclesService from "../services/vehicles";

import profile from "../assets/profile.png";

export default function Home({ navigation }) {
  const user = SessionService.index();
  const [vehicles, setVehicles] = useState([]);
  const [filter, setFilter] = useState("");
  const [favor, setFavor] = useState(false);

  useEffect(() => {
    let vehiclesFiltered = VehiclesService.all();

    if (favor) {
      vehiclesFiltered = vehiclesFiltered.filter(vehicle => vehicle.favor);
    }

    if (filter) {
      vehiclesFiltered = vehiclesFiltered.filter(vehicle =>
        Object.values(vehicle).some(
          field =>
            typeof field === "string" &&
            field
              .toLowerCase()
              .trim()
              .indexOf(filter.toLowerCase().trim()) >= 0
        )
      );
    }

    setVehicles(vehiclesFiltered);
  }, [favor, filter]);

  function onHandleClickLogout() {
    SessionService.destroy();
    navigation.navigate("Login");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={user.image || profile} style={styles.profile} />
        <View style={styles.info}>
          <Text style={styles.apresentation}>
            {user.profile || "Sem perfil"}
          </Text>
          <Text style={styles.name}>{user.name || "Nome desconhecido"}</Text>
        </View>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={onHandleClickLogout}
        >
          <FontAwesome name="sign-out" size={25} color={"#fff"} />
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.filter}>
          <TextInput
            style={styles.filterTextInput}
            onChangeText={text => setFilter(text)}
            value={filter}
            placeholder="Pesquisar por ..."
          />
          <TouchableOpacity
            style={styles.favorButton}
            onPress={() => setFavor(favorite => !favorite)}
          >
            <FontAwesome
              name={favor ? "star" : "star-o"}
              size={25}
              color={"#555"}
            />
          </TouchableOpacity>
        </View>
        <CarList
          style={styles.list}
          itens={vehicles}
          onItemPress={item => alert(item.name)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1"
  },
  listContainer: {
    flex: 1
  },
  list: {
    borderColor: "#ccc",
    borderWidth: 1
  },
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
  filter: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  filterTextInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    marginRight: 10
  },
  favorButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  logoutButton: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center"
  }
});
