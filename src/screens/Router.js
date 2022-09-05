/*import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import AuthApp from "../../App";
import HomeScreen from './home/HomeScreen';
import { AuthProvider } from "../authcontext/AuthProvider";
const stack=createNativeStackNavigator();

const Router=()=>{
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
      }
    
      useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
       // return subscriber; 
      }, []);
      return(
       <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name="auth" component={AuthApp} />
            <stack.Screen name="home" component={HomeScreen} />
        </stack.Navigator>
       </NavigationContainer>
      )  
}
export default ()=>{
    return(
        <AuthProvider><Router /></AuthProvider>
    )
} */