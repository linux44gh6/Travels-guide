import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signOut, updateProfile, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase.config";
import axios from "axios";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const auth=getAuth(app)
    const googleProvider= new GoogleAuthProvider()
    const facebookProvider=new FacebookAuthProvider()
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleLogIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const facebookLogin=()=>{
        return signInWithPopup(auth,facebookProvider)
    }
    const singIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
     const updateUserProfile=(name,photoURL)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoURL
        })
     }
     useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setLoading(false)
            setUser(currentUser)
            
            console.log(currentUser);
            if(currentUser){
                const userInfo={email:currentUser.email}
                axios.post(`${import.meta.env.VITE_BASE_URL}/jwt`,userInfo,{headers:{
                    authorization:`${localStorage.getItem('token')}`
                }})
                .then((res)=>{
                    if(res.data.token){
                        localStorage.setItem('token',res.data.token)
                    }
                })
            }
            else{
                localStorage.removeItem('token')
            }
        })
        return ()=>{
            unsubscribe()
        }
     },[auth])
    const authInfo={
        user,
        loading,
        createUser,
        googleLogIn,logOut,updateUserProfile,facebookLogin,singIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;