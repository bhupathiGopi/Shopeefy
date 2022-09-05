import React from 'react'
import { View ,Text,TouchableOpacity,TextInput,Image} from 'react-native'
import * as RootNavigation from '../../../rootnavigation/RootNavigation';
import Antdesign from 'react-native-vector-icons/AntDesign';
import { getFormattedNumber } from './ListItem/ItemDetailScreen';
const Cardpayment = (val) => {
  const price=val.route.params;
  return (
    <View style={{margin:10}}>
       <Antdesign name='arrowleft' size={50}/>
         <Text style={{fontSize:32,color:'#000000',fontWeight:'800',marginTop:5}}>Card Payment</Text>
         <TextInput placeholder='Name on card' 
          placeholderTextColor = "#000000"
         style={{height:70,borderRadius:35,paddingLeft:30,fontSize:25,textDecorationColor:'#000000',
        marginTop:15,
         shadowColor: '#000000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor:'rgb(255,255,255)'}}/>
         <TextInput placeholder='Card Type' 
          placeholderTextColor = "#000000"
         style={{height:70,borderRadius:35,paddingLeft:30,fontSize:25,textDecorationColor:'#000000',
        marginTop:25,
         shadowColor: '#000000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor:'rgb(255,255,255)'}}/>
        <TextInput placeholder='Card Number' 
          placeholderTextColor = "#000000"
         style={{height:70,borderRadius:35,paddingLeft:30,fontSize:25,textDecorationColor:'#000000',
        marginTop:25,
         shadowColor: '#000000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor:'rgb(255,255,255)'}}/>
        <View style={{flexDirection:'row'}}>
        <TextInput placeholder='Expire date' 
          placeholderTextColor = "#000000"
         style={{height:70,width:200,borderRadius:35,paddingLeft:30,fontSize:25,textDecorationColor:'#000000',
        marginTop:25,
         shadowColor: '#000000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor:'rgb(255,255,255)'}}/>
        <TextInput placeholder='CVV' 
          placeholderTextColor = "#000000"
         style={{height:70,width:150,borderRadius:35,paddingLeft:30,fontSize:25,textDecorationColor:'#000000',
        marginTop:25,
        marginLeft:10,
         shadowColor: '#000000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor:'rgb(255,255,255)'}}/>
        </View>
        <View style={{marginTop:20,flexDirection:'row'}}>
             <Image source={{uri:'https://i.ibb.co/1mvL3rY/visa-logo.webp'}} style={{height:40,marginLeft:10,width:80}} />
             <Image source={{uri:'https://i.ibb.co/DM3Kwdy/Mastercard-Download-PNG.webp'}} style={{height:40,marginLeft:10,width:80}}/>
        </View>
        <TouchableOpacity onPress={()=>RootNavigation.navigate('congrats')}>
        <View style={{height:70,backgroundColor:'#ff9900',marginTop:30,borderRadius:35,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:25,fontWeight:'700',color:'#000000'}}>Check Out - ₹ {getFormattedNumber(price)}.00 </Text>
        </View>
        </TouchableOpacity>
    </View>
  )
}

export default Cardpayment