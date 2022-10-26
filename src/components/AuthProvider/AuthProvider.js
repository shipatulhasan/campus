import React, { createContext, useEffect, useState } from 'react';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import {app} from '../../firebase/firebase.init' 

export const AuthContext = createContext() 

const AuthProvider = ({children}) => {
    const [user,setUser] = useState()
    const [isLoader, setLoader] = useState(false)

    const auth = getAuth(app)


    // google provider
    const googleProvider = new GoogleAuthProvider()

    // google signup

    const googleSignUp = ()=>{
        return signInWithPopup(auth,googleProvider)
    }

    // auth set 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setLoader(false)
            setUser(currentUser)
        })
        return()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {user, googleSignUp}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;