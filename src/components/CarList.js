import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';

import VehiclesService from '../services/vehicles';
import car from '../assets/car.png';

export default function CarList({ item, onItemPress }) {
  return (
    <FlatList
      style={styles.flatlist}
      ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#dedede'}} />}
      data={VehiclesService.all()}
      keyExtractor={vehicle => vehicle.name}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => onItemPress(item)}>
          <View style={styles.card}>
            <Image style={styles.cardImage} source={car} />
            <View style={styles.cardText}>
              <Text style={styles.cardTextTitle}>
                {item.manufacturer} {item.name} - {item.year}
              </Text>
              <Text style={styles.cardTextInfo}>R$ {item.price}</Text>
              <Text style={styles.cardTextInfo}>{item.km} Km</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  cardImage: {
    width: 48,
    height: 48,
    margin: 10,
    aspectRatio: 1,
    borderRadius: '50%'
  },
  cardText: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10
  },
  cardTextTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardTextInfo: {
    fontSize: 14,
    color: '#999',
  }
});