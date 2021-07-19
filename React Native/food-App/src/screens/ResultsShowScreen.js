import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp';

//App.js de tanımla
//ResultsShowScreen ve ResultsList arasındaki bağlantıyı kurmak için 
//navigation prop u tanımlanır vee navigation.getParam("id") bağlantı kurulur


const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null); //null değer atanır başlangıçta alınan data yok

    //console.log(result); //result id ye göre datay özellikleri tutar

    const id = navigation.getParam("id");

    //helper function
    const getResults = async (id) => {
        const response = await yelp.get(`${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResults(id);
    }, []);


    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>
                {result.name}
            </Text>

            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }}
                    />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
})

export default ResultsShowScreen
