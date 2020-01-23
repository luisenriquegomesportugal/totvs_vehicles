import React, {useState, useCallback} from 'react';
import { View, SafeAreaView, FlatList, Text, Image, StyleSheet } from 'react-native';

import CarList from '../components/CarList';

import SessionService from "../services/session";
import VehiclesService from "../services/vehicles";

import profile from '../assets/profile.png';

export default function Home() {
  const user = SessionService.index();

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.profile} source={profile} />
          <View style={styles.info}>
            <Text style={styles.apresentation}>Administrador</Text>
            <Text style={styles.name}>Luis Enrique Gomes Portugal</Text>
          </View>
        </View>
        <CarList onItemPress={item => alert(item.name)} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1'
    },
    header: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
      height: 80,
      marginVertical: 10
    },
    info: {
      flexDirection: 'column'
    },
    profile: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      backgroundColor: '#fff',
      marginRight: 10
    },
    apresentation: {
      fontSize: 14,
      color: '#888'
    },
    name: {
      fontSize: 22
    }
});