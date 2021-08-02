import React, { useContext } from 'react'
import { Text, StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'; //Showing a map
import { Context as LocationContext } from "../context/LocationContext"

//MapView , Polyline => React native map components

const Map = () => {

    const {
        state: { currentLocation, locations }
    } = useContext(LocationContext);


    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
    }

    // initialLocation = {
    //     longitude: -122.0312186,
    //     latitude: 37.33233141,
    // };

    //initialRegion başlangıç noktası değerlerini verir
    return (
        <MapView
            style={styles.map}
            //coordinates
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >

            <Circle
                center={currentLocation.coords}
                radius={120}
                strokeColor="rgba(158,158,255,1.0)" //color
                fillColor="rgba(158,158,255,0.3)" //opacity
            />

            {/* //lineDashPattern !! */}
            <Polyline lineDashPattern={[1]} coordinates={locations.map(loc => loc.coords)} />

        </MapView>
    );
};

//MapView in gözükmesi için mutlaka height style verilmeli
const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map
