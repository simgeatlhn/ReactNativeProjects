import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext'; //context ile veriyi alacak component de blogContext import edilir
import { Feather } from "@expo/vector-icons"; //kullanılacak iconlar import edilir

//BlogContext.js den gelen value IndexSCreen ile gösterilir

const IndexScreen = ({ navigation }) => {

    //blogPost is data
    //const blogPosts  = useContext(BlogContext);

    //blogPosts yerine data kullanılır
    //blogPosts yerine state kullanılır
    //blogContext de yazılan fonksiyonlar IndexScreen de kullanılmak için tanımlanmalı
    const { state, deleteBlogPost } = useContext(Context);

    return (
        <View>
            {/* <Text>Index Screen</Text> */}
            {/* Button addBlogPost callback fonksiyonu ile yeni blog ekler */}
            {/* <Button title="Add post" onPress={addBlogPost} /> */}
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        //TouchableOpacity ile navigation propunu kullanarak App.js de tanımlanan ShowScreen componentine yönlendirir
                        //id ye göre blogPost içeriği gelmesi için id propunu kullanırız 
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Show",
                                { id: item.id })}
                        >
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>

                                {/* //TouchableOpacity içerisine alınan icon a tıkladığımızda deleteBlogPost fonksiyonuna yönlendirir ve blogpost u siler.
                                    //bu yüzden TouchableOpacity kullanırız */}
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather style={styles.icon} name="trash" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};


//IMPORTANT !!
//App.js de olan uygulamanın ana başlığına icon eklemek istediğimizde navigationOptions kullanırız
//TouchableOpacity ile icon ve component (CreateScreen.js) ile bağlantı kurarız
//Feather icon u birden fazla icon a karşılık gelebilir bu yüzden name="plus" şeklinde belirtiriz
IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "gray"
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;
