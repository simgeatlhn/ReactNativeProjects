import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from '../config/constant';
import { Ionicons } from '@expo/vector-icons';

//Settings - parent , cell - child
//title,icon,onPress = props
const Cell = ({ title, icon, onPress, tintColor, style }) => {
    return (
        <TouchableOpacity
            style={[styles.cell, style]}
            onPress={onPress}
        >
            <View style={[styles.iconContainer, { backgroundColor: tintColor }]}>
                <Ionicons name={icon} size={24} color={"white"} />
            </View>

            <Text style={styles.title}>{title}</Text>

            <Ionicons name="chevron-forward-outline" size={20} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cell: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "white",
        flexDirection: "row", //icon ve logout aynı satırda yan yana olması için
        alignItems: "center",
        //border ile ayırır
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: colors.border
    },
    title: {
        fontSize: 16,
        marginStart: 16, //icon ve logout arasında boşluk olması için
        flex: 1
    },
    iconContainer: {
        width: 22,
        height: 32,
        //backgroundColor: colors.red, ==> yerine tintColor prop u verilir !!
        borderRadius: 6,
        //container içerisinde icon u ortalamak için
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Cell
