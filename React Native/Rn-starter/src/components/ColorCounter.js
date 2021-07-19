import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

//color prop u SquareScreen den gelir- Bu sayede color name statik <Text>Red/Text> değil dinamik <Text>{color}</Text> şekilde verilir
//JSX RULE = {`Increase ${color}`}
const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={() => onIncrease()}
                title={`Increase ${color}`}
            />

            <Button
                onPress={() => onDecrease()}
                title={`Decrease ${color}`}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default ColorCounter
