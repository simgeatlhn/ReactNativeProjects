
import createDataContext from "./createDataContext"; //tek bir yerden context oluşturulur

//App.js de Provider tanımlanmalı
//App.js de tanımlanabilmesi için Provider export edilmeli


//- useReducer

//state = blogPosts
//action = different operation (delete,add,update)
const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_blogpost":
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 9999), //delete fonksiyonu için id eklenmeli
                    //SAVE CONTENT 
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];
        //filter methodu ile state deki tüm veriler id ye göre filtrelenir
        case "delete_blogpost":
            return state.filter((blogPost) => blogPost.id !== action.payload);

        case "edit_blogpost":
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost;
            });
        default:
            return state;
    }
};

//helper function

//add blogPost
//SAVE CONTENT
//title,content new post u kaydetmek için parametreler. callback kaydedildikten sonra otomatik olarak IndexSCreen ekranına dönmesi için
const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({ type: "add_blogpost", payload: { title, content } });
        if (callback) {
            callback();
        }
    };
};

//delete blogPost
//deleteBlogPost tanımlanmadan önce export edilmeli
//deleteBlogPost IndexScreen de tanımlanmalı
const deleteBlogPost = (dispatch) => {
    //action methodu id ye göre yapılır
    return (id) => {
        dispatch({ type: "delete_blogpost", payload: id })
    }
}

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({
            type: "edit_blogpost",
            payload: { id, title, content }
        });
        if (callback) {
            callback();
        }
    };
};


//createDtaContext 3 parametre alır - reducer , actions , initialState
export const { Context, Provider } =
    createDataContext(
        blogReducer,
        { addBlogPost, deleteBlogPost, editBlogPost },
        [{ title: "TEST POST", content: "TEST CONTENT", id: 1 }]
    );










