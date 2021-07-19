import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from "../api/yelp"  //request için yelp.js import edilir
import useResults from '../hook/useResults' //api nin çekildiği useResults.js import edilir
import ResultsList from '../components/ResultsList' //ResultsList.js - child , SearchScreen.js - parent  

//IMPORTANT !!!
// You can search for steak, fast food, etc. in the search section. Thus, restaurants are listed for you.


//navigation screens componentleri arasında geçişi sağlayacak
const SearchScreen = ({ navigation }) => {

    const [term, setTerm] = useState(""); //search input default value ""

    //IMPORTANT
    const [searchApi, results, errorMessage] = useResults(); //useResults.js de return edilen bilgiler
    //api den bilgiler useResults.js de çekilir.

    //results dan bilgileri alip fiyatlarına före filter methodunu uygularız
    const filterResultsByPrice = (price) => {
        //price === "$" || "$$" || "$$$"
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (

        //flex:1 aşağı yukarı harekti sağlar (vertical) for IOS
        <View style={{ flex: 1 }} >
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)} //term , newTerm ile state ediliyor  // onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}  // or onTermSubmit={searchApi}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results </Text>

            {/* //ScrollView aşağı ve yukarı hareketi sağlar for IOS */}
            {/* //ResultsList ve seacrScreen arasında iletişimi kurabilmek için proplar(title,results,navigation) eklemeliyiz . ve burada verilen proplaro ResultsList.js de tanımlamalıyız*/}

            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice("$")}
                    title="Cost Effective"
                //navigation={navigation}
                />
                <ResultsList
                    results={filterResultsByPrice("$$")}
                    title="Bit Pricer"
                //navigation={navigation}
                />
                <ResultsList
                    results={filterResultsByPrice("$$$")}
                    title="Big Spender"
                //navigation={navigation}
                />
            </ScrollView>
        </View >

    )
}

const styles = StyleSheet.create({})

export default SearchScreen
