import React, { useState } from 'react'
import { Text, Button, Input } from 'react-native-elements'
import { View, StyleSheet } from "react-native";
import Spacer from './Spacer';

//signup ve signin de farklı olan proplar(headerText,errorMessage..) AuthForm da tanımlanır. signup ve signin de özelleştirilir
const AuthForm = ({ headerText, errorMessage, submitButtonText, onSubmit }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={(newEmail) => setEmail(newEmail)} //kısaca onChangeText={setEmail} de yazılabilir
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                secureTextEntry //password ün gizlenmesini sağlar
                label="Password"
                value={password}
                onChangeText={(newPassword) => setPassword(newPassword)}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {/* //hata mesajının ekranda gözükmesi için */}
            {/* //ternary operator kullanırken JSX için {yaz} */}
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

            <Spacer>
                {/* //AuthContext de oluşturulan signup fonksiyonu ile onPress ile bağlantı kurulur */}
                <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
            </Spacer>
        </View>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: "red",
        marginLeft: 15,
        marginTop: 15
    }
})

export default AuthForm
