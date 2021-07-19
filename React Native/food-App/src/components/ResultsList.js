import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultsDetail from "./ResultsDetail"; //ResultsList - parent , ResultsDetail - chilf
import { withNavigation } from "react-navigation";

//searchScreen.js de verilen proplar resultsList.js de tanımlanmalı (tile,results,navigation)
//birden fazla prop verebilmek için FlatList kullnabiliriz

const ResultsList = ({ title, results, navigation }) => {

    //eğer kategorilerde ürün yoksa null değer dönürür
    //kategoriler costeffective, bit pricer gibi
    if (!results.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {/* <Text >Results:{results.length}</Text> */}

            <FlatList
                horizontal //image slider şeklinde olması için eklmeliyiz
                showsHorizontalScrollIndicator={false} //scroll barın görünmesini engeller
                data={results}
                keyExtractor={result => result.id}

                //item is results of bussiness object
                //ResultsShowScreen ve ResultList arasındaki iletişimi kurmak için onPress e ikinci bir özellik ekleriz (id)
                renderItem={({ item }) => {
                    // return <Text>{item.name}</Text>
                    //detay bilgiler(name,city) ResultsDetail componentinden gelecek
                    //result prop u ResultsDetail da tanımlanmalı

                    //IMPORTANT - React da Link to gibi 
                    //ResultsList den ResultsShowScreen e geçiş yapılacak
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("ResultsShow", { id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});


//withNvigation kullanmak için
export default withNavigation(ResultsList);
