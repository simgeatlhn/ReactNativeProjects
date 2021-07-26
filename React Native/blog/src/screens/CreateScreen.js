import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm';

//IndexScreen deki + iconu ile CreateScreen arasında bağlantı navigation ile kurulur.

const CreateScreen = ({ navigation }) => {

    const { addBlogPost } = useContext(Context);

    //create new title and content
    return <BlogPostForm
        onSubmit={(title, content) => {
            addBlogPost(title, content, () => navigation.navigate("Index"))
        }}
    />
};

const styles = StyleSheet.create({

});

export default CreateScreen
