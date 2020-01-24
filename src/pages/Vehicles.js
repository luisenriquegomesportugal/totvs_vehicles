import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import favorite from "../assets/star.png";
import favoriteOn from "../assets/starOn.png";

import CarList from "../components/CarList";
import Header from "../components/Header";

import VehiclesService from "../services/vehicles";

export default function Home({ navigation }) {
  const [isFetching, setIsFetching] = useState(false);
  const [vehicles, setVehicles] = useState(VehiclesService.all());
  const [vehiclesFiltered, setVehiclesFiltered] = useState([]);
  const [filter, setFilter] = useState("");
  const [favor, setFavor] = useState(false);

  useEffect(() => {
    let _vehiclesFiltered = vehicles;

    if (favor) {
      _vehiclesFiltered = _vehiclesFiltered.filter(vehicle => vehicle.favor);
    }

    if (filter) {
      _vehiclesFiltered = _vehiclesFiltered.filter(vehicle =>
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

    setVehiclesFiltered(_vehiclesFiltered);
  }, [favor, filter, vehicles]);

  function onRefreshCarList() {
    setIsFetching(true);
    setVehicles(VehiclesService.all());

    setTimeout(() => setIsFetching(false), 1000);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
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
            <Image
              source={favor ? favoriteOn : favorite}
              style={styles.favLogo}
            />
          </TouchableOpacity>
        </View>
        <CarList
          style={styles.list}
          itens={vehiclesFiltered}
          onRefresh={onRefreshCarList}
          isFetching={isFetching}
          onItemPress={item => navigation.navigate("Cars", { item })}
        />
      </View>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("AddVehicle")}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
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
  fab: {
    position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: "#3B83Bd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    bottom: 15,
    right: 15,
    elevation: 2,
    shadowOpacity: 0.3,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 }
  },
  fabText: {
    color: "#fff",
    fontSize: 20
  },
  favLogo: {
    width: 25,
    height: 25
  }
});
