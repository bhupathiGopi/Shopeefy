import React,{useState} from 'react'
import { View,Text,Dimensions,TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';
import Octicons from 'react-native-vector-icons/Octicons'
import * as RootNavigation from '../../../rootnavigation/RootNavigation';
const height=Dimensions.get('window').height;
const width=Dimensions.get('window').width;
const CongratsScreen = () => {
    const [currentDate, setCurrentDate] = useState('');

  return (
    <View>
        <View style={{height:height*0.37,width:width*90/100,
                          shadowColor: '#000000',
                           shadowOffset: { width: 3, height: 3 },
                           shadowOpacity: 1,
                           shadowRadius: 5,
                           elevation: 5,
                           marginTop:height*0.04,marginLeft:width*0.05,
                           borderRadius:25,backgroundColor:'#60A936',
                           alignItems:'center'}}>
        <Octicons name='issue-closed' size={75} style={{color:'#ffffff',marginTop:height*0.05}}/>
        <Text style={{fontSize:35,color:'#ffffff',marginTop:20,fontWeight:'600'}}>Congratulations</Text>
        <Text style={{fontSize:20,color:'#ffffff',marginTop:5,fontWeight:'400'}}>your order</Text>
        <Text style={{fontSize:20,color:'#ffffff',marginTop:5,fontWeight:'400'}}>successfully placed</Text>
        </View>
        <View style={{marginLeft:20,marginTop:10}}>
            
            <Text style={{fontSize:18,color:'#000000',fontWeight:'700'}}>Your order will be delivered by </Text>
            <View style={{width:340,marginTop:5,marginLeft:15}}>
            <Text style={{fontSize:18,color:'#000000',textAlign:'center'}}>We are placed to conforn your order no 555 7777 8888</Text>
            </View>
            <View style={{width:350,marginTop:5,marginLeft:15}}>
            <Text style={{fontSize:18,color:'#000000',textAlign:'center'}}>We will email username@gmail.com to conforn yous online booking</Text>
            </View>
            <Text style={{fontSize:18,color:'#000000',textAlign:'center',marginTop:50}}>Thank you for shopping</Text>
            <TouchableOpacity onPress={()=>RootNavigation.navigate('ratingscreen')}>
            <View style={{height:70,backgroundColor:'#ff9900',marginTop:10,alignItems:'center',justifyContent:'center',marginRight:20,borderRadius:35}} >
            <Text style={{fontSize:28,color:'#000000',fontWeight:'600'}}>Feedback</Text>
            </View>
            </TouchableOpacity>
            <Text style={{textAlign:'center',fontSize:26,marginTop:15}}>Close</Text>
        </View>
       
        
    </View>
  )
}

export default CongratsScreen