import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    baseURL: "http://c38f92145304.ngrok.io"
})

//authomatic authentication
//??
instance.interceptors.request.use(

    //config object has some information about the request we are about to make
    async (config) => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)

//axios run this function before you ever make a request
export default instance;

//AuthContext de import edilmeli