import React from 'react'
import { View, StyleSheet } from "react-native";
import ContactRow from '../components/ContactRow';
import { colors } from "../config/constant";
import Seperator from '../components/Seperator';
import Cell from '../components/Cell';

const Settings = () => {
    return (
        <View>
            <ContactRow
                name="Simge Atlıhan"
                subtitle="simgeeatlihan@gmail.com"
                style={styles.contactRow}
            />

            <Seperator />

            <Cell
                title="Logout"
                icon="log-out-outline"
                tintColor={colors.red}
                onPress={() => {
                    alert("touched logout")
                }}
                style={{ marginTop: 20 }}
            />

            <Cell
                title="Help"
                icon="ichevron-forward-outline"
                tintColor={colors.green}
                onPress={() => {
                    alert("touched help")
                }}
                style={{ marginTop: 20 }}
            />

            <Cell
                title="Tell a friend"
                icon="heart-outline"
                tintColor={colors.pink}
                onPress={() => {
                    alert("touched tell a friend")
                }}
                style={{ marginTop: 20 }}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    contactRow: {
        backgroundColor: "white",
        marginTop: 2,
        borderTopWidth: StyleSheet.hairlineWidth,
        backgroundColor: colors.border
    }
})

export default Settings
