import React, { useState, useEffect } from "react";
import { Text, Button, StyleSheet, View } from "react-native";
import yelp from "../api/yelp";


//api yi çekmek için ayrı bir dosya oluştur

export default () => {


    //bussines array için  => results state i yazılır
    const [results, setResults] = useState([]);

    //error handling --  hatayo terminal de değil ekranda görebilmek için sstate oluşturabiliriz
    const [errorMessage, setErrorMessage] = useState("");


    //IMPORTANT - searchApi fonksiyonu ile api den bilgileri çekiyoruz
    //asekron olması için async ve await kullanırız //ES7
    //ERROR HANDLING => try - catch

    const searchApi = async (searchTerm) => {


        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm, //or term:term
                    location: "san jose"
                }
            });
            setResults(response.data.businesses) //update of results

        } catch (err) {
            setErrorMessage("Something went wrong");
        }

    };

    //bad code çünkü birden fazla çalışır aşma useEffect hook u sayesinde bir kez çağırılır.
    //call searchApi when component
    //is first rendered. BAD CODE!
    //searchApi("pasta")
    useEffect(() => {
        searchApi("pasta");
    }, []);

    //IMPORTANT!!
    //***SearchScreen.js de kullanılacak proplar return edilir - searchScreen.js de de useResults import edilmeli
    return [searchApi, results, errorMessage];

};