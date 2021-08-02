import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Spacer from './Spacer'
import { withNavigation } from 'react-navigation'

//NavLink Signup ve signin de import edildiğinde özelleştirilmesi gereken yerler prop (text,routeName) olarak yazılmalı!!
const NavLink = ({ navigation, text, routeName }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={styles.link}>
                    {text}
                </Text>
            </Spacer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        color: "blue"
    }
});

//withNavigation wrap component
export default withNavigation(NavLink);
