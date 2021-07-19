import React, { useState } from 'react'
import { View, StyleSheet, Button, Text, TextInput } from 'react-native'


//IOS da otomatik büyük harfle başlamak ve düzeltme özelliklerini kaptmak için 2 prop tanımlarız.
//autoCapitalize , autoCorrect
//value prop the text input is going to show that on the screen valu="hi there" or value={name}
//onChangeText function = callback function
//callback function aprent ve chil arasındaki bağlantıyı kurar
//girilen name değerini useState ile güncellemek için onChangeText prop u kullanılır ve setName e aktarılır.
//for password give error message - no shorter than 4 charachter
//onChange function is important for useState hook

const TextScreen = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>Your name is : {name}</Text>

            <Text>          </Text>

            <Text>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {/* //error message  JSX and ternary operator*/}
            {password.length < 4 ? <Text>Password must be 4 charachter at least.</Text> : null}
            <Text>Your password is: {password}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1
    }
});
export default TextScreen
