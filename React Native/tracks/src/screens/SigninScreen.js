import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context } from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation' //clearErrorMessage için

const SigninScreen = () => {

    //state = data , signin = function , clearErrorMessage=function
    const { state, signin, clearErrorMessage } = useContext(Context);

    return (
        <View style={styles.container}>

            <NavigationEvents onWillFocus={clearErrorMessage} />

            <AuthForm
                headerText="Sign In to Your Account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign In"
            />

            <NavLink
                routeName="Signup"
                text="Dont have an account? Sign up instead !"
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 250
    }
})

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

export default SigninScreen
