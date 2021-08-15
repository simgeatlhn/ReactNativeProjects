import React from 'react'
import { View, StyleSheet } from "react-native";

const Seperator = () => {
    return (
        <View style={styles.seperator} />
    )
}

const styles = StyleSheet.create({
    seperator: {
        height: StyleSheet.hairlineWidth,//değer vermek yerine(height:1) StyleSheet.hairlineWidth yazarız ekranlarda farklılık olmaz en küçük değeri alır
        backgroundColor: "#E2E2E2",
        marginStart: 88
    }
})

export default Seperator
