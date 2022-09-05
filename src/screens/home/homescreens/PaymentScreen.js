import React from 'react'
import { View,Text,Image,TouchableOpacity } from 'react-native';
import Antdesign from 'react-native-vector-icons/AntDesign';
import * as RootNavigation from '../../../rootnavigation/RootNavigation'
/*https://i.ibb.co/JckjgkR/Google-G-Logo1.png
https://i.ibb.co/HP6wbj4/paytm.png
https://i.ibb.co/RDr3sHD/Phone-Pe-Logo1.png*/ 
const PaymentScreen = (price) => {
    
    const pay=price.route.params
  return (
    <View style={{margin:15}}> 
         <Antdesign name='arrowleft' size={50}/>
         <Text style={{fontSize:32,color:'#000000',fontWeight:'800',marginTop:5}}>Payment</Text>
         <View style={{flexDirection:'row',marginTop:20}}>
             <View style={{height:120,width:175,marginRight:10,borderRadius:10,
             alignItems:'center',
             justifyContent:'center',
             shadowColor: '#000000',
             shadowOffset: { width: 3, height: 3 },
             shadowOpacity: 1,
             shadowRadius: 5,
             elevation: 5,
             backgroundColor:'rgb(255,255,255)'}}>
                 <Image source={{uri:'https://i.ibb.co/JckjgkR/Google-G-Logo1.png'}} style={{height:60,width:60}}/>
                 <Text style={{fontSize:15,color:'#000000'}}>Googlepay</Text>
             </View>
             <View style={{height:120,width:175,
              alignItems:'center',
              justifyContent:'center',
             borderRadius:10,
            shadowColor: '#000000',
            shadowOffset: { width: 3, height: 3 },
            shadowOpacity: 1,
            shadowRadius: 5,
            elevation: 5,
            backgroundColor:'rgb(255,255,255)'}}>
                 <Image source={{uri:'https://i.ibb.co/RDr3sHD/Phone-Pe-Logo1.png'}} style={{height:100,width:150}}/>
             </View>
         </View>
         <View style={{flexDirection:'row',marginTop:10}}>
             <View style={{height:120,width:175,marginRight:10,borderRadius:10,
             alignItems:'center',
             justifyContent:'center',
             shadowColor: '#000000',
             shadowOffset: { width: 3, height: 3 },
             shadowOpacity: 1,
             shadowRadius: 5,
             elevation: 5,
             backgroundColor:'rgb(255,255,255)'}}>
                   <Image source={{uri:'https://i.ibb.co/HP6wbj4/paytm.png'}} style={{height:100,width:150}}/>
             </View>
             <View style={{height:120,width:175,
             alignItems:'center',
             justifyContent:'center',
             borderRadius:10,
            shadowColor: '#000000',
            shadowOffset: { width: 3, height: 3 },
            shadowOpacity: 1,
            shadowRadius: 5,
            elevation: 5,
            backgroundColor:'rgb(255,255,255)'}}>
                 <Text style={{fontSize:20,color:'#000000'}}>Netbanking</Text>
             </View>
         </View>
         <TouchableOpacity onPress={()=>RootNavigation.navigate('cardpayment',pay)}>
         <View style={{height:120,marginTop:10,
             alignItems:'center',
             justifyContent:'center',
             borderRadius:10,
            shadowColor: '#000000',
            shadowOffset: { width: 3, height: 3 },
            shadowOpacity: 1,
            shadowRadius: 5,
            elevation: 5,
            backgroundColor:'rgb(255,255,255)'}} >
                <Text style={{fontSize:20,color:'#000000'}}>Debit/Credit</Text>
         </View>
         </TouchableOpacity>
         <Text style={{textAlign:'center',marginTop:20,fontSize:20,textDecorationLine:'underline'}}>More</Text>
    </View>
  )
}

export default PaymentScreen;