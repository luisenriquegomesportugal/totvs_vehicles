import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import VehicleService from '../services/vehicles';
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Constants, { Camera } from "expo-camera";
import CarImg from '../assets/car.svg';

function AddVehicles() {
  const [manufacturer, setManufacturer] = useState('');
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [km, setKm] = useState('');
  const [price, setPrice] = useState('');
  const [seller, setSeller] = useState('');
  const [description, setDescription] = useState('');
  const [profile, setProfile] = useState(CarImg);

  async function getPermissionAsync() {
    if (Constants.platform.ios) {
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
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      setProfile(result);
    }
  }

  function changeImageProfile() {
    getPermissionAsync();
    _pickImage();
  }

  const _addVehicle = () => {
     if(!manufacturer || !name || !year || !km || !price || !seller) {
      alert('Todos os campos são obrigatórios');
      return;
    }

    const vehicleObj = {
      manufacturer: manufacturer,
      name: name,
      year: year,
      km: km,
      price: price,
      seller: seller,
      favor: false,
      description: 'launch edition',
      optional: [
        {},
      ],
      images: [profile],
    };

    VehicleService.save(vehicleObj);

    alert('Adicionado com sucesso');
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.form}
        behavior="padding"
        keyboardVerticalOffset={100}
        enabled>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.imgContainer}
            onPress={() => changeImageProfile()}>
            <Image source={profile} style={styles.imgRound} />
          </TouchableOpacity>
        </View>

        <TextInput
          onChangeText={text => setManufacturer(text)}
          value={manufacturer}
          style={styles.input}
          placeholder="Fabricante"
          autoCapitalize="words"
          returnKeyType={'next'}
          onSubmitEditing={() => {
            this.name.focus();
          }}
          blurOnSubmit={false}
        />

        <TextInput
          onChangeText={text => setName(text)}
          value={name}
          style={styles.input}
          placeholder="Modelo"
          autoCapitalize="words"
          ref={input => {
            this.name = input;
          }}
          returnKeyType={'next'}
          onSubmitEditing={() => {
            this.year.focus();
          }}
          blurOnSubmit={false}
        />

        <TextInput
          onChangeText={text => setYear(text)}
          value={year}
          style={styles.input}
          placeholder="Ano"
          keyboardType="numeric"
          autoCapitalize="none"
          ref={input => {
            this.year = input;
          }}
          returnKeyType={'next'}
          onSubmitEditing={() => {
            this.km.focus();
          }}
          blurOnSubmit={false}
        />

        <TextInput
          onChangeText={text => setKm(text)}
          value={km}
          style={styles.input}
          placeholder="Quilometragem"
          keyboardType="numeric"
          autoCapitalize="none"
          ref={input => {
            this.km = input;
          }}
          returnKeyType={'next'}
          onSubmitEditing={() => {
            this.price.focus();
          }}
          blurOnSubmit={false}
        />

        <TextInput
          onChangeText={text => setPrice(text)}
          value={price}
          style={styles.input}
          placeholder="Preço"
          keyboardType="numeric"
          autoCapitalize="none"
          ref={input => {
            this.price = input;
          }}
          returnKeyType={'next'}
          onSubmitEditing={() => {
            this.description.focus();
          }}
          blurOnSubmit={false}
        />

        <TextInput
          onChangeText={text => setDescription(text)}
          value={description}
          style={styles.input}
          placeholder="Descrição"
          autoCapitalize="words"
          autoCompleteType="off"
          ref={input => {
            this.description = input;
          }}
          onSubmitEditing={() => {
            this.seller.focus();
          }}
          blurOnSubmit={false}
        />

        <TextInput
          onChangeText={text => setSeller(text)}
          value={seller}
          style={styles.input}
          placeholder="Vendedor"
          autoCapitalize="words"
          autoCompleteType="off"
          ref={input => {
            this.seller = input;
          }}
          onSubmitEditing={() => {
            _addVehicle();
          }}
          blurOnSubmit={true}
        />

        <TouchableOpacity style={styles.button} onPress={() => _addVehicle()}>
          <Text style={styles.buttonText}>Adicionar veículo</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  form: {
    padding: 15,
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#3B83Bd',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  imgContainer: {
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  imgRound: { 
    width: 100, 
    height: 100, 
    borderRadius: 100,
  },
});

export default AddVehicles;
