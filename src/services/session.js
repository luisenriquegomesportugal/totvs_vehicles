import { AsyncStorage } from 'react-native';

const STORAGE_KEY = "SESSION_STORAGE_KEY";

export default {
    async index() {
        return await AsyncStorage.getItem(STORAGE_KEY);
    },
    async create(user) {
        await AsyncStorage.removeItem(STORAGE_KEY);
        await AsyncStorage.setItem(STORAGE_KEY, user);
    },
    async destroy(){
        await AsyncStorage.removeItem(STORAGE_KEY);
    }
}