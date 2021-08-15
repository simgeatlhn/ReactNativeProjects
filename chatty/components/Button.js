import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = ({ title, varient }) => {
    return (

        //birden fazla style verilecekse [ ] içerisine alınır !!
        //varient = primary ise black değilse transparent olacak
        <TouchableOpacity
            style={[styles.buttonContainer,
            {
                backgroundColor: varient === "primary" ? "black" : "transparent",
                paddingHorizontal: varient === "primary" ? 16 : 0,
            },
            ]}
        >
            <Text style={[styles.buttonLabel,
            { color: varient === "primary" ? "white" : "black" }]}
            >
                {title}
            </Text>

        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({

    //color ve backgroundColor => prop (varien) a göre değişecek !!!
    buttonContainer: {
        //backgroundColor: "black",
        paddingVertical: 12,
        borderRadius: 6
    },
    buttonLabel: {
        //color: "white",
        fontSize: 18

    }

})

export default Button
