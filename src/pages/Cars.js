import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import carImg from "../assets/car.png";
import favorite from "../assets/star.png";
import favoriteOn from "../assets/starOn.png";

function Cars() {
  const [CarName, setCarName] = useState("");
  const [year, setYear] = useState("");
  const [km, setKm] = useState("");
  const [price, setPrice] = useState("");
  const [favor, setFavor] = useState(false);
  const [Descripiton, setDescription] = useState("");

  const [favoriteImg, setFavoriteImg] = useState(favorite);

  function changeFavorite() {
    if (favor === false) {
      setFavoriteImg(favoriteOn);
      setFavor(true);
    } else {
      setFavoriteImg(favorite);
      setFavor(false);
    }
  }

  const car = {
    manufacturer: "ford",
    name: "ka",
    year: "1009",
    km: 2000,
    price: 48000,
    seller: "jhon silva",
    favor: false,
    Descripiton: "launch editon",
    optional: [
      {
        icon: "image/icon",
        label: "motor 1.0"
      }
    ]
  };

  useEffect(() => {}, [
    //testes
  ]);

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.imgContainer}
          onPress={() => {}}
          style={styles.imgContainer}
        >
          <Image source={carImg} style={styles.profileLogo} />
        </TouchableOpacity>

        <TouchableOpacity onPress={changeFavorite} style={styles.fav}>
          <Image source={favoriteImg} style={styles.favLogo} />
        </TouchableOpacity>

        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>Fabricado:{car.manufacturer}</Text>
          <Text style={styles.cardInfoText}>Modelo:{car.name}</Text>
          <Text style={styles.cardInfoText}>Ano:{car.year}</Text>
          <Text style={styles.cardInfoText}>valor:{car.price}</Text>
          <Text style={styles.cardInfoText}>Vendedor:{car.seller}</Text>
          <Text style={styles.cardInfoText}>opcionais:</Text>
          <Text style={styles.cardInfoText}>Descrição:{car.Descripiton}</Text>
        </View>
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
  favLogo: {
    width: 25,
    height: 25
  },
  fav: {
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
  cardInfo: {
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#bfcade"
  },
  cardInfoText: {
    paddingVertical: 10,
    fontSize: 22,
    justifyContent: "center",
    paddingHorizontal: 5,
    color: "rgb(32, 39, 47)"
  }
});

export default Cars;
