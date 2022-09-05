import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SpraceScreen from './src/screens/log/SpraceScreen';
import AdvScreen1 from './src/screens/log/AdvScreen1';
import AdvScreen2 from './src/screens/log/AdvScreen2';
import AdvScreen3 from './src/screens/log/AdvScreen3';
import LoginScreen from './src/screens/authscreens/LoginScreen';
import SignupScreen from './src/screens/authscreens/SignupScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import { navigationRef } from './src/rootnavigation/RootNavigation';
import { AuthProvider } from './src/authcontext/AuthProvider';
const stack=createNativeStackNavigator();
const AuthApp = () => {
  return (
       <AuthProvider>
       <NavigationContainer ref={navigationRef} >
          <stack.Navigator screenOptions={{headerShown: false}}>
            <stack.Screen name='sprace' component={SpraceScreen} />
            <stack.Screen name='adv1' component={AdvScreen1} />
            <stack.Screen name='adv2' component={AdvScreen2} />
            <stack.Screen name='adv3' component={AdvScreen3} />
            <stack.Screen name='login' component={LoginScreen} />
            <stack.Screen name='signup' component={SignupScreen} />
            <stack.Screen name='home1' component={HomeScreen} />
          </stack.Navigator>
       </NavigationContainer>
       </AuthProvider>
  )
}

export default AuthApp;