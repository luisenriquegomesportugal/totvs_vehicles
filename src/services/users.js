import { AsyncStorage } from 'react-native';

const usersDefault = [];

const STORAGE_KEY = "USER_STORAGE_KEY";

export default {
    async _init(){
        let users = await AsyncStorage.getItem(STORAGE_KEY);
        
        if(!users) {
            await AsyncStorage.setItem(STORAGE_KEY, usersDefault);
            users = usersDefault;
        }

        return users;
    },

    async all() {
        return this._init();
    },
    async save(user) {
        const users = this._init();
        users.push(user);

        await AsyncStorage.setItem(STORAGE_KEY, users);

        return user;
    },
    async show(email) {        
        const users = this._init();
        return users.find(user => user.email = email);
    },
    async update(user) {
        const users = this._init();
        const index = users.findIndex(user => user.email = email);

        users[index] = user;
        await AsyncStorage.setItem(STORAGE_KEY, users);

        return user;
    }
}