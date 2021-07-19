import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import ImageDetail from "../components/ImageDetail";
//ImageScreen - parent, ImageDetail-child => parent-child relationship

const ImageScreen = () => {
    return (
        //title ve imageSource isimlerini ve ImageDetail.js de prop a ata
        //title ve imageSource propları IageDetail da source={props.imageSource} ve {props.title} olarak geçiş yapar
        <View>
            <ImageDetail
                title="Forest"
                imageSource={require("../../assets/forest.jpg")}
                score={9}
            />
            <ImageDetail
                title="Beach"
                imageSource={require("../../assets/beach.jpg")}
                score={8}
            />
            <ImageDetail
                title="Mountain"
                imageSource={require("../../assets/mountain.jpg")}
                score={7}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default ImageScreen;
