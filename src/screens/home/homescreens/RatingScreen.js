import React,{useState} from 'react'
import { View,Text,Dimensions,TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import * as RootNavigation from '../../../rootnavigation/RootNavigation'
const height=Dimensions.get('window').height;
const width=Dimensions.get('window').width;
const RatingScreen = () => {
    const [rate,setRate]=useState(0)
  return (
    <View>
         <View style={{height:height*0.37,width:width*90/100, shadowColor: '#000000',
                           shadowOffset: { width: 3, height: 3 },
                           shadowOpacity: 1,
                           shadowRadius: 5,
                           elevation: 10,
             marginTop:height*0.16,marginLeft:width*0.05,
             borderRadius:25,backgroundColor:'#60A936',
             alignItems:'center',justifyContent:'center'}}>
            <View style={{width:250}}>
            <Text style={{fontSize:30,textAlign:'center'}}>Please Rate Your Experience</Text>
            </View>
            <View style={{height:50,flexDirection:'row',paddingLeft:10}}>
                <TouchableOpacity onPress={()=>{setRate(1)}}>
                   {rate >=1? <MaterialIcon name='star' size={50}  color={'#ff9900'}style={{}}/> :<MaterialIcon name='star-border' size={50} />}
                </TouchableOpacity> 
                <TouchableOpacity onPress={()=>setRate(2)}>
                   {rate >=2? <MaterialIcon name='star' size={50}  color={'#ff9900'}style={{}}/> :<MaterialIcon name='star-border' size={50} />}
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setRate(3)}>
                   {rate >=3? <MaterialIcon name='star' size={50}  color={'#ff9900'}style={{}}/> :<MaterialIcon name='star-border' size={50} />}
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setRate(4)}>
                   {rate >=4? <MaterialIcon name='star' size={50}  color={'#ff9900'}style={{}}/> :<MaterialIcon name='star-border' size={50} />}
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setRate(5)}>
                   {rate >=5? <MaterialIcon name='star' size={50}  color={'#ff9900'}style={{}}/> :<MaterialIcon name='star-border' size={50} />}
                </TouchableOpacity>  
                </View>
            </View>
                 <TouchableOpacity onPress={()=>RootNavigation.navigate('Home1')}>
                <View style={{height:70,backgroundColor:'#ff9900',marginTop:20,marginLeft:15,alignItems:'center',justifyContent:'center',marginRight:20,borderRadius:35}} >
                <Text style={{fontSize:28,color:'#000000',fontWeight:'600'}}>Submit</Text>
                </View>
                </TouchableOpacity>
        </View>
  )
}

export default RatingScreen