import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import * as RootNavigation from '../rootnavigation/RootNavigation' ;
import  AsyncStorage  from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider=({children}) =>{
     const [user,setUser]=useState(null);
     const[error1,setError1]=useState(null);
     const[error2,setError2]=useState(null)
    const login=async (email,password) =>{
        try{
            await auth().signInWithEmailAndPassword(email,password)
            .then(()=>{RootNavigation.navigate('home1'),setError1(null),
           ()=> AsyncStorage.setItem(
                'login','true'),
                async () => {
                     const mail= await AsyncStorage.getItem('login')
                     console.log(mail)
                    }
                  
                
              })
           // await auth().getUserByEmail(email).then((userdata)=>setUser(userdata))
           // console.log(user);
            
        
        } catch(e){
            setError1('Incorrect email/password')
        }
     }
   const register= async (email,password) =>{
        try{
            await auth().createUserWithEmailAndPassword(email,password)
            .then(()=>{RootNavigation.navigate('login'),setError2(null)})
        } catch(e){
            setError2('email already used')
        }
    }
   const logout= async ()=>{
       try{
        await auth().signOut();
       }  catch (e){
        console.log(e)
       }
    } 
    return(
          <AuthContext.Provider value={{user,login,register,logout,error1,error2}} >{children}</AuthContext.Provider>
    )
}