import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context as TrackContext } from "../context/TrackContext"
import MapView, { Polyline } from 'react-native-maps'

const TrackDetailScreen = ({ navigation, }) => {

    //state=data
    const { state } = useContext(TrackContext);

    //_id , TrackList.js de tanımlandı
    const _id = navigation.getParam("_id");

    //helper function
    const track = state.find(t => t._id === _id);
    const initialCoords = track.locations[0].coords;

    return (
        <View>
            <Text style={{ fontSize: 48 }}>
                {track.name}
            </Text>
            <MapView
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords

                }}
                style={styles.map}
            >
                {/* //track has locations property */}
                <Polyline lineDashPattern={[1]} coordinates={track.locations.map(loc => loc.coords)} />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default TrackDetailScreen
