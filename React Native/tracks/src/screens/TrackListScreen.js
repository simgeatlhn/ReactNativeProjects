import React, { useContext } from 'react'
import { Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationEvents } from 'react-navigation' //onWillFocus için
import { Context as TrackContext } from "../context/TrackContext" //fetchTrack fonksiyonu için import et
import { ListItem } from 'react-native-elements';

const TrackListScreen = ({ navigation }) => {
    //state=data
    const { state, fetchTracks } = useContext(TrackContext);

    return (

        <SafeAreaView forceIncet={{ top: "always" }}>
            {/* //fetchTracks is reference - fetch all information from our api */}
            < NavigationEvents onWillFocus={fetchTracks} />

            <Text style={{ fontSize: 48 }}>
                Tracks
            </Text>

            {/* //fetchTrack fonksiyonu(TrackContext) ile alınan tracks objelerini ekranda gösteririz */}
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() =>
                            navigation.navigate("TrackDetail", { _id: item._id })
                        }>
                            <ListItem>
                                <ListItem.Content>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>
                    );
                }}
            />

        </SafeAreaView>
    );

}

const styles = StyleSheet.create({})

TrackListScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

export default TrackListScreen
