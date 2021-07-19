import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, FlatList } from 'react-native';

const ColorScreen = () => {

    //push method modify the array(colors)
    //...colors = colors arrayine randomRgb den gelen rastgele rengi ekler

    const [colors, setColors] = useState([]);

    return (
        //piece of data is changing =>red,green,blue
        <View>
            <Button
                title="Add a color"
                onPress={() => {
                    setColors([...colors, randomRgb()])
                }}
            />

            {/* //OPTION 1 */}
            {/* //random fonksiyonu ile butona tıklandığında renkler değişir */}
            {/* //yerine FlatList kullanalır */}
            {/* <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} /> */}

            {/* //OPTION 2 */}
            {/* //mapping=FlatList */}
            {/* //FlatList included keyExtractor,data,renderItem */}
            {/* //flatList ile data={colors} ile butona tıklandığında random renk eklenir */}
            {/* //FlatList is going to automatically make them scrollable */}
            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem={({ item }) => {
                    return (
                        <View style={{ height: 100, width: 100, backgroundColor: item }} />
                    );
                }}
            />
        </View>
    );

};

//function
const randomRgb = () => {
    //floor ve random js fonksiyonları
    //*256 anlamı 0-256 arasında rgb değerleri
    //button a tıklandığında random olarak bir renk return edilir. randomRgb() fonksiyonu ile
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});
export default ColorScreen;
