import { AsyncStorage } from 'react-native';

let session = null;

export default {
    async index() {
        return session;
    },
    async create(user) {
        session = user;
    },
    async destroy(){
        session = null;
    }
}