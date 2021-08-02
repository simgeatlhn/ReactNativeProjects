import createDataContext from './createDataContext';
import trackerApi from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef'; //route

const authReducer = (state, action) => {

    //errormessage, token signupScreen de kullanılır
    switch (action.type) {
        case "add_error":
            return { ...state, errorMessage: action.payload };
        case "signin":
            return { errorMessage: "", token: action.payload };
        case "clear_error_message":
            return { ...state, errorMessage: "" };
        case "signout":
            return { token: null, errorMessage: "" }
        default:
            return state;
    }
};

//EXAMPLE
// const add = (a, b) => {
//     return a + b;
// }
//=======EQUIVELENT=====
// const add = (a, b) = a + b;

//different action functions
//signin-signup-signout(accountscreen)...

//Authomatic Signin
const tryLocalSignin = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem("token");
        //IF-ELSE
        if (token) {
            dispatch({ type: "signin", payload: token });
            //eğer kullanıcı önceden zaten giriş yapmış ise direkt TrackList e yönlendirir.
            navigate("TrackList");
        } else {
            //eğer kullanıcı giriş yapmamışsa ya da kayıt olmamışsa Signup a yönlendirilir
            navigate("Signup")
        }
    }
}

//we can export clearErrorMessage to different components
const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch({ type: "clear_error_message" })
    }
}

//when click sign up(signupScreen.js) ,button runs signup function
const signup = (dispatch) => {
    return async ({ email, password }) => {
        //make api request to sign up with that email and password
        //if we sign up, modify our state, and say that we are authenticated
        //if signing up fails,we probably need to reflect an error message somewhere
        try {
            const response = await trackerApi.post("/signup", { email, password });
            await AsyncStorage.setItem("token", response.data.token);
            //new action signup
            dispatch({ type: "signin", payload: response.data.token })

            //**NAVIGATE TO MAIN FLOW
            navigate("TrackList")

        } catch (err) {
            dispatch({ type: "add_error", payload: "Something went wrong with signup" })
        }
    }
}

const signin = (dispatch) => {
    return async ({ email, password }) => {

        //try to signin
        //handle success by updating state
        //handle failure by showing error message

        try {
            const response = await trackerApi.post("/signin", { email, password });
            await AsyncStorage.setItem("token", response.data.token);
            //new action signin
            dispatch({ type: "signin", payload: response.data.token })

            //NAVIGATE TO MAINFLOW
            navigate("TrackList");

        } catch (err) {
            dispatch({
                type: "add_error", payload: "Something went wrong with signin"
            })

        }
    }
}

const signout = (dispatch) => {
    return async () => {
        //somehow sign out !!
        await AsyncStorage.removeItem("token");
        dispatch({ type: "signout" });

        //NAVIGATE TO LOGINFLOW
        navigate("loginFlow");
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: "" } //initial property //no token no logged in
);
