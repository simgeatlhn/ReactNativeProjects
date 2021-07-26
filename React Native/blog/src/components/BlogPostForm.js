import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

//onSubmit defined
//onSubmit CreateScreen.js de kullanılır.Bu yüzden prop olarak tanımlanmalı
const BlogPostForm = ({ onSubmit, initialValues }) => {

    //default value = initialValues.title ,initialValues.content
    //title ve content için state durumu oluşturulmalı
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);


    return (
        //value yazılan  değeri ekranda göstermesi için
        //onChangeText state durumu değiştikçe ekrandaki yazılan yazının değişmesi için
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />


            <Button
                title="Save Blog Post"
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
};

//default props
// + icon u ile createScreen componentinde inial value "" olması için
BlogPostForm.defaultProps = {
    initialValues: {
        title: "",
        content: ""
    }
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
})

export default BlogPostForm
