import React, { useEffect } from 'react'
import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context' //DONT FORGET
//components
import ContactRow from '../components/ContactRow';
import Seperator from '../components/Seperator';


const Chats = ({ navigation }) => {

    //useEffect [] uygulama ilk açıldığında çalıştırılacak -  login kontrolü
    useEffect(() => {
        const isLoggedIn = false;
        if (!isLoggedIn) {
            navigation.navigate("SignUp");
        }
    }, []);

    return (
        <SafeAreaView>

            <ContactRow
                name="Simge Atlıhan"
                subtitle="Hi friend"
                onPress={() => {
                    navigation.navigate("Chat")
                }} />

            {/* //satırlar(sohbetler) arasında çizgi sağlar */}
            <Seperator />

            <ContactRow
                name="Berna Öztürk"
                subtitle="Hello"
                onPress={() => {
                    navigation.navigate("Chat")
                }} />

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({


})



export default Chats;
