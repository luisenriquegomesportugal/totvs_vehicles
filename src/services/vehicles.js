import { AsyncStorage } from 'react-native';

const vehiclesDefault = [
    {
        manufacturer: "FORD",
        name: "KA", 
        year: "2016", 
        km: 30000, 
        price: 49000, 
        seller: "Jhon Silva", 
        favor: false, 
        description: "launch edition", 
        optional: [
            {
                icon: "",
                label: "motor 1.0"
            }
        ],
        images: []
    }
];

const STORAGE_KEY = "VEHICLE_STORAGE_KEY";

export default {
    async _init(){
        let vehicles = await AsyncStorage.getItem(STORAGE_KEY);
        
        if(!vehicles) {
            await AsyncStorage.setItem(STORAGE_KEY, vehiclesDefault);
            vehicles = vehiclesDefault;
        }

        return vehicles;
    },

    async all() {
        return this._init();
    },
    async save(vehicle) {
        const vehicles = this._init();
        vehicles.push(vehicle);

        await AsyncStorage.setItem(STORAGE_KEY, vehicles);

        return vehicle;
    }
}