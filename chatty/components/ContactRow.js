import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
//Icons
import { Ionicons } from "@expo/vector-icons"; import { SafeAreaView } from 'react-native-safe-area-context' //DONT FORGET
//colors
import { colors } from '../config/constant';


//Chats-parent , ContactRow-child
//props =>name,subtitle,onPress
const ContactRow = ({ name, subtitle, onPress, style }) => {
    return (
        <SafeAreaView>
            <TouchableOpacity style={[styles.row, style]} onPress={onPress}>

                {/* //Avatar */}
                <View style={styles.avatar}>
                    <Text style={styles.avatarLabel}>
                        {/* //name in ilk harflerini alması için, split boşluklardan ayırır reduce tekrar birleştirir */}
                        {name.split(' ').reduce((prev, current) => `${prev}${current[0]}`, '')}
                    </Text>
                </View>

                {/* //Text */}
                <View style={styles.textsContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>

                {/* //Icon */}
                <Ionicons name="chevron-forward-outline" size={20} />

            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row", //View(Text) ve Icon elemanlarını yanyana göstermesini sağlamak için
        alignItems: "center",
        paddingHorizontal: 16, //right-left
        paddingVertical: 20
    },
    textsContainer: {
        flex: 1, //View(Text) tüm alanı kaplaması için =>böylece icon da sona eklenir
        marginStart: 16
    },
    avatar: {
        width: 56,
        height: 56,
        backgroundColor: colors.primary,
        borderRadius: 28,
        //label(US) ortalanması için
        alignItems: "center",
        justifyContent: "center"
    },
    avatarLabel: {
        fontSize: 20,
        color: "white"
    },
    name: {
        fontSize: 16
    },
    subtitle: {
        marginTop: 2,
        color: "#565656"
    }

})

export default ContactRow
