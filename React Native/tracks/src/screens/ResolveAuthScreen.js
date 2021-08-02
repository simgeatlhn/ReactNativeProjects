import React, { useEffect, useContext } from 'react'
import { Context as AuthContext } from '../context/AuthContext'


const ResolveAuthScreen = () => {
    //call that action function = tryLocalSignin
    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);

    return null;
}

export default ResolveAuthScreen
