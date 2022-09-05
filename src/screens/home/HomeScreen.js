import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './homescreens/Home';
import Categirise from './homescreens/Categirise';
import Cart from './homescreens/Cart';
import Profile from './homescreens/Profile';
import ItemList from './homescreens/ListItem/ItemList';
import ItemDetailScreen from './homescreens/ListItem/ItemDetailScreen';
import CongratsScreen from './homescreens/CongratsScreen';
import RatingScreen from './homescreens/RatingScreen';
import PaymentScreen from './homescreens/PaymentScreen';
import Cardpayment from './homescreens/Cardpayment';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons'
import EveilIcon from 'react-native-vector-icons/EvilIcons'
const Drawer=createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack=createNativeStackNavigator();
const HomeStack=()=>{
 
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Home1' component={Home}/>
      <Stack.Screen name='itemlist' component={ItemList}/>
      <Stack.Screen name='itemdetails' component={ItemDetailScreen} />
      <Stack.Screen name='congrats' component={CongratsScreen} />
      <Stack.Screen name='ratingscreen' component={RatingScreen}/>
      <Stack.Screen name='payment' component={PaymentScreen} />
      <Stack.Screen name='cardpayment' component={Cardpayment}  tabBarVisible={false}/>
    </Stack.Navigator>
  )
}
const HomeScreen=()=> {
  return (
  
    <Tab.Navigator screenOptions={{headerShown:false,
    tabBarInactiveBackgroundColor:'#414141',
    tabBarActiveBackgroundColor:'#414141',
    tabBarActiveTintColor:'#ffffff',
    tabBarLabelStyle:{paddingBottom:10,fontSize:15},
    tabBarStyle:{height:70, backgroundColor:'#41414'},
    tabBarHideOnKeyboard:true


    }}>
      <Tab.Screen name="Home" component={HomeStack} options={{tabBarIcon:({focus,color})=>(<MaterialIcons name='home-outline' size={30}  style={{tabBarInactiveTintColor:'#f0f0f0',tabBarActiveTintColor:'#ffffff'}} />)}}/>
      <Tab.Screen name="Categorise" component={Categirise} options={{tabBarIcon:({color})=>(<Icon name='category' size={30} tabBarActiveTintColor='#ffffff' />)}}/>
      <Tab.Screen name='Cart' component={Cart} options={{tabBarIcon:({color})=>(<MaterialIcons name='cart-outline' size={30} tabBarActiveTintColor='#ffffff' />)}}/>
      <Tab.Screen name='profile' component={Profile} options={{tabBarIcon:({color})=>(<EveilIcon name='user' size={30} tabBarActiveTintColor='#ffffff'color={'#ffffff'} />)}}/>
    </Tab.Navigator>
  );
}


export default HomeScreen; 

