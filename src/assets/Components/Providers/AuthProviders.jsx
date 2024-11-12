import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../firebasae.init";



 export const AuthContext = createContext(null)
 const goggleProvider = new GoogleAuthProvider()

const AuthProviders = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

   
    const createUser = (email,password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword (auth,email,password)
    }
    const signInUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }
const signInWithGoogle =()=>{
   return signInWithPopup(auth, goggleProvider)
}
  useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth,currentUser=>{
    console.log('current user',currentUser)
    setUser (currentUser)
    setLoading(false)
})
return ()=>{
    unSubscribe()
}
  },[])

    const info={
     
       user,
       loading,
       createUser,
       signInUser,
       signOutUser,
       signInWithGoogle
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;