import React from 'react';
import axios from 'axios';
import { CountryType } from './types';
import { useState } from 'react';
import { useEffect } from 'react';
//component
import Country from './components/Country';
import Loading from './components/Loading';

function App() {

    //***STATE TYPESCRİPT */
    //useState de de type definition yapılır => useState<CountryType[]>
    const [countries, setCountries] = useState<CountryType[]>([]); //type ve initial value birbiriyle uyumlu olmalı !! type=[] initial value= []

    //loading
    const [loading, setLoading] = useState<boolean>(false);


    //***AXIOS TYPESCRIPT */
    //api yi çekmek için - getCountries fonksiyonu yazılır
    //axios kullanırken alınan verilere nasıl type definition atanır???
    //type = type.ts dosyasındaki CountryType ,verilerin type ı => <CountryType[]>
    const getCountries = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get<CountryType[]>("https://restcountries.eu/rest/v2/all");
            setCountries(data);
        } catch {
            console.log("Error while importing countries from api");
        } finally {
            setLoading(false); //finally blok her zaman çalışacak
        }
    };

    //useEffect => bir fonksiyon ve bir dependency array alır
    //useEffect api alınır
    //dependency array uygulamanın ne zaman çalışacağını belirtir -> [] = uygulama ilk çalıştığında ülkeler api den alınır state e yazılır

    useEffect(() => {
        getCountries(); //fonk
    }, []); //dependency array

    console.log({ countries });

    //***PROPS TYPESCRIPT */
    return (
        //country = CountryType
        //veriler countries e aktarıldı
        <div>
            <Loading loading={loading}>
                {countries.map((country) => {
                    //country prop u Country.tsx den gelir
                    return (
                        <Country key={country.name} country={country} />
                    );

                    //component (Country.tsx) yoksa
                    //  <p>{country.name}-{country.capital}</p>
                })}
            </Loading>
        </div>
    );
}

export default App;