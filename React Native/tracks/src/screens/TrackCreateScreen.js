import React, { useContext, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Map from '../components/Map' //subcomponent,
import { SafeAreaView } from 'react-native-safe-area-context'
import "../_mockLocation" //fake location //test data //// Uncomment _mockLocation when running on Expo Go without location services.
import { Context as LocationContext } from "../context/LocationContext"
import useLocation from "../hooks/useLocation";
import { withNavigation } from 'react-navigation'
import TrackForm from '../components/TrackForm' //subcomponent
import { FontAwesome } from "@expo/vector-icons" //icon

//isFocused=flag
//isFocused- boolean value
//isFocused true - start tracking , isFocused false - stop tracking
//LocationContext = callback function
const TrackCreateScreen = ({ isFocused }) => {

    const { state: { recording }, addLocation } = useContext(LocationContext);

    //solution=every single time a user's location gets updated
    const callback = useCallback(
        //location 0 prop
        location => {
            addLocation(location, recording);
        },
        [recording] //return recording(state)
    );

    //useLocation ile konum sürekli değişir
    //useLocation.js den gelen fonksiyonlar(addLocation) TrackCreate de tanımlanır
    const [err] = useLocation(isFocused || recording, callback); //callback fonksiyonun tekrar tekrar aynısı çalışmaz. konuum değişir

    return (
        <SafeAreaView forceIncet={{ top: "always" }}>
            <Text h2>Create a Track</Text>
            <Map />

            {err ? <Text>Please enable location services</Text> : null}

            <TrackForm />
        </SafeAreaView>
    )
}

TrackCreateScreen.navigationOptions = {
    title: "Add track",
    tabBarIcon: <FontAwesome name="plus" size={20} />
};

const styles = StyleSheet.create({})

export default withNavigation(TrackCreateScreen)
