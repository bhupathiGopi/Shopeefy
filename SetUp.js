import * as React from "react";
import AuthApp from "./App";
import firebase from "@react-native-firebase/app";
import database from '@react-native-firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyBxY8WGLS-veu9pEdZmhB6T6V5MlnKP-CI",
    authDomain: "shopefy-eadc8.firebaseapp.com",
    databaseURL: "https://shopefy-eadc8-default-rtdb.firebaseio.com",
    projectId: "shopefy-eadc8",
    storageBucket: "shopefy-eadc8.appspot.com",
    messagingSenderId: "208476662962",
    appId: "1:208476662962:web:71a864fb8919bdd94dedab"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}  
export {firebase};
const SetUp=()=>{
    return(
    <AuthApp />
)}
export default SetUp;
