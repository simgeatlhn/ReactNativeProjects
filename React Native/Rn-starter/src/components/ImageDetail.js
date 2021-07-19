import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

//props kullanmak yerine direkt ImageScreen den gelen tanımlamaları yazabiliriz. Böylece {props.title} şeklinde yazmamızı engeller
const ImageDetail = ({ title, imageSource, score }) => {
    return (
        //title ,score, imageSource parent ImageScreen.js den gelir
        <View>
            <Image source={imageSource} />
            <Text> {title}</Text >
            <Text>Image Score-{score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({})

export default ImageDetail
