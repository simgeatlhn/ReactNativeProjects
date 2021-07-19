import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";


//term and onTermChange  manage TextInput
//**onTermChange = callback function
//**term ve onTermChange , SearchScreen den gelir

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            {/* //name="search"  size={30} icon un boyutunu ayarlar */}
            <FontAwesome name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange} //onChaangeText fonksiyonu onTermChange fonksiyonunu çağırır
                onEndEditing={onTermSubmit} //onEndEditing fonksiyonu onTermSubmit fonksiyonunu çağırır
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,//sağdan ve soldan boşluk bırakır
        flexDirection: "row", //View parent FontAwesome ve TextInput child , childlar aynı satırda olması için parent a flexDirection:"row" özelliğini ver
        marginBottom: 10
    },
    inputStyle: {
        // borderColor: "black",
        // borderWidth: 1,
        flex: 1,//input  tüm satırı kaplar
        fontSize: 18 //placeholder un yazı boyutunu ayarlar
    },
    iconStyle: {
        fontSize: 35,//JSX olarak size={30} yazılabilirdi.
        alignSelf: "center",  //icon ortalanır
        marginHorizontal: 15 //icon için sağdan ve soldan boşluk bırakılır
    }
})

export default SearchBar
