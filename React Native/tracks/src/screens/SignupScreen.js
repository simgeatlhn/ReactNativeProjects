import React, { useContext, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'

const SignupScreen = ({ navigation }) => {

    //state = data , signup = function, clearErrorMessage=function
    const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);

    //ResolveAuthScreen.js de kullanılır
    // useEffect(() => {
    //     tryLocalSignin();
    // }, []);

    return (
        <View style={styles.container}>

            <NavigationEvents onWillFocus={clearErrorMessage} />

            <AuthForm
                headerText="Sign up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign up"
                onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead !"
            />
        </View>
    )
}

//signup başlığının gözükmemesi için false olur
SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //borderWidth: 10,
        //borderColor: "red",
        justifyContent: "center",
        marginBottom: 250
    }
})

export default SignupScreen
