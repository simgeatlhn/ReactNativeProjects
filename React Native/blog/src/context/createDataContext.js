import React, { useReducer } from "react";

//several time inside application
//createDtaContext e göre BlogContext yazılır

export default (reducer, actions, initialState) => {

    //PART 1
    const Context = React.createContext();


    //PART 2
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        //actions === {addBlogPost:(dispatch) =>{return()=>{} }}
        //??
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
    }

    //PART 3
    return { Context, Provider };

};