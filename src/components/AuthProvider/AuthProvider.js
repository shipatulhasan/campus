import React, { createContext, useEffect, useState } from 'react';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendPasswordResetEmail} from 'firebase/auth'
import {app} from '../../firebase/firebase.init' 


export const AuthContext = createContext() 
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState()
    const [isLoader, setLoader] = useState(true)
    const [theme, setTheme] = useState(`light`);

    


    //provider
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    

    // create user

    const createUser = (email,password)=>{

        setLoader(true)

        return createUserWithEmailAndPassword(auth,email,password)
    }

    // update user
    const setUserProfile = (profile)=>{

        return updateProfile(auth.currentUser,profile)
    }

    const signInUser = (email,pass)=>{

        return signInWithEmailAndPassword(auth,email,pass)
    }

    // google signup

    const signUpWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider)
    }

    // create user using github
    const signUpWithGithub = ()=>{
        
        return signInWithPopup(auth, githubProvider)
    }

    // signout functionality

    const logOut = ()=>{
        return signOut(auth)
    }

    // reset password
    const resetPass = (email)=>{
        return sendPasswordResetEmail(auth, email)

    }


    // auth info send
    const authInfo = {
        user, 
        signUpWithGoogle, 
        logOut, 
        createUser, 
        setUserProfile, 
        signInUser, 
        resetPass, 
        signUpWithGithub, 
        isLoader,
        theme,
        setTheme
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

    
    return (
        <AuthContext.Provider value={authInfo} className={`${theme}:bg-slate-800`}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;