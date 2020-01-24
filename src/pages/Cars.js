import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView
} from "react-native";
import carImg from "../assets/profile_car.png";
import favorite from "../assets/star.png";
import favoriteOn from "../assets/starOn.png";

import VehicleServices from "../services/vehicles";

function Cars({ navigation }) {
  const car = navigation.getParam("item", {});
  const [favor, setFavor] = useState(car.favor);

  useEffect(() => {
    VehicleServices.update({ ...car, favor });
  }, [favor]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <View style={styles.imgContainer}>
        <Image source={carImg} style={styles.profileLogo} />
      </View>

      <TouchableOpacity
        onPress={() => setFavor(old => !old)}
        style={styles.fav}
      >
        <Image source={favor ? favoriteOn : favorite} style={styles.favLogo} />
      </TouchableOpacity>

      <View style={styles.cardInfo}>
        <Text style={styles.cardInfoBox}>
          <Text style={styles.cardInfoText}>Fabricante: </Text>
          {car.manufacturer}
        </Text>
        <Text style={styles.cardInfoBox}>
          <Text style={styles.cardInfoText}>Modelo: </Text>
          {car.name}
        </Text>
        <Text style={styles.cardInfoBox}>
          <Text style={styles.cardInfoText}>Ano: </Text>
          {car.year}
        </Text>
        <Text style={styles.cardInfoBox}>
          <Text style={styles.cardInfoText}>Preço: </Text>
          R$ {car.price}
        </Text>
        <Text style={styles.cardInfoBox}>
          <Text style={styles.cardInfoText}>Vendedor: </Text>
          {car.seller}
        </Text>
        <Text style={styles.cardInfoBox}>
          <Text style={styles.cardInfoText}>Descrição: </Text>
          {car.Description}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    color: "#fff",
    padding: 20
  },
  imgContainer: {
    width: 150,
    height: 150,
    borderRadius: 80,
    marginHorizontal: "20%",
    alignItems: "center",
    paddingTop: 0,
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  profileLogo: {
    width: 140,
    height: 140,
    borderRadius: 80
  },
  favLogo: {
    width: 25,
    height: 25
  },
  fav: {
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    justifyContent: "center",
    backgroundColor: "#ccc"
  },
  cardInfo: {
    width: "70%",
    marginHorizontal: 0,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  cardInfoBox: {
    flex: 1,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    fontSize: 17
  },
  cardInfoText: {
    fontWeight: "bold",
    fontSize: 17
  }
});

export default Cars;
