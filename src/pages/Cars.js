import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import carImg from '../assets/profile.svg';
import favorite from '../assets/star.png';
import favoriteOn from '../assets/starOn.png';

function Cars(props) {
  const [favor, setFavor] = useState(false);
  const [favoriteImg, setFavoriteImg] = useState(favorite);

  function changeFavorite() {
    const img = favor ? favoriteOn : favorite;

    setFavoriteImg(img);
    setFavor(!favor);
  }

  const car = {
    manufacturer: 'Ford',
    name: 'KA',
    year: '2016',
    km: 2000,
    price: 48000,
    seller: 'Jhon Silva',
    favor: false,
    Description: 'launch editon',
    optional: [
      {
        icon: 'image/icon',
        label: 'motor 1.0',
      },
    ],
  };

  useEffect(() => {
    changeFavorite();
  }, []);

  return (
    <View style={styles.container}>
      
      <View style={styles.imgContainer}>
        <Image source={carImg} style={styles.profileLogo} />
      </View>

      <TouchableOpacity onPress={changeFavorite} style={styles.fav}>
        <Image source={favoriteImg} style={styles.favLogo} />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  imgContainer: {
    width: 150,
    height: 150,
    borderRadius: 80,
    marginHorizontal: '20%',
    alignItems: 'center',
    paddingTop: 0,
    justifyContent: 'center',
    backgroundColor: '#3B83Bd',
  },
  profileLogo: {
    width: 140,
    height: 140,
    borderRadius: 80,
  },
  favLogo: {
    width: 25,
    height: 25,
  },
  fav: {
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
  cardInfo: {
    width: '70%',
    marginHorizontal: 0,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cardInfoBox: {
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    fontSize: 17,
  },
  cardInfoText: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default Cars;
