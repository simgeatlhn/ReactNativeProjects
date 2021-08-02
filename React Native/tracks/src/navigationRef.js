import { NavigationActions } from 'react-navigation';

let navigator;

//setNavigator App.js de import edilir
export const setNavigator = nav => {
    navigator = nav;
};


//routeName=signup,signin,trackList,trackDetail..
//navigate function can be imported anywhere
export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
};