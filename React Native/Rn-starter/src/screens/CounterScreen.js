import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {

    //setCounter fonksiyonuna counter variable olarak gönderilir
    //setCounter=fuction , counter=variable
    //useState ile başlangıç değeri 0 atanır.(starting default value=0)
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Button
                title="Increase"
                onPress={() => {
                    //Dont do this!!
                    //counter++;
                    //Dont do this!!
                    //setCounter(counter++);
                    //onPress calls setCounter and updates value
                    //re-runs or re-renders the CounterScreen
                    setCounter(counter + 1);
                }}
            />

            <Button
                title="Decrease"
                onPress={() => {
                    //Dont do this!!
                    //counter--;
                    setCounter(counter - 1);
                }}
            />
            <Text>Curent Count:{counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({})

export default CounterScreen
