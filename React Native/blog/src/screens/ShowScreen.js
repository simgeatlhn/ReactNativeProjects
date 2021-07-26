import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from "../context/BlogContext";
import { EvilIcons } from '@expo/vector-icons';

//App.js de import et

const ShowScreen = ({ navigation }) => {

    //passing parameters to routes - getParam
    //state = data of blogPost List creasteDataContext ile export edilen data 
    const { state } = useContext(Context);

    //blogPost = data
    //blogPost a tıklandığında içeriğin id ye göre kendine ait olması için
    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam("id") //BlogContext deki id yi getParam ile alırız
    );

    return (
        <View>
            <Text>
                {blogPost.title}
            </Text>
            <Text>
                {blogPost.content}
            </Text>
        </View>
    );
};


//pencil icon ile ShowScreen.js ve EditScreen.js arasında bağlantı kurarız.
//id ye göre edit yapılması için getParam("id")
ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() =>
                navigation.navigate('Edit', { id: navigation.getParam("id") })
            }
            >
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        ),
    };
};


const styles = StyleSheet.create({})

export default ShowScreen
