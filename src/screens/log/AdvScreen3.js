import React from 'react'
import { View,Image,StyleSheet,Text,Dimensions,TouchableOpacity } from 'react-native'

const AdvScreen3 = ({navigation}) => {
  return (
    <View style={{flex:1}}>
        <View>
            <Image source={{uri:'https://i.ibb.co/tPbxyGP/Slider-one-03-2.png'}}
           
            style={styles.image}/>
        </View>
        <View style={styles.v2}>
        <Text style={styles.text}>On Time Delivery</Text>
        </View>
        <View>
            <Text style={styles.text2}>Delivery process can be done within a day. Hassle free.</Text>
        </View>
        <View style={styles.bottomView}>
            <TouchableOpacity onPress={()=>navigation.navigate('login')}>
            <View style={styles.skip}>
                <Text style={{fontSize:20}}>Skip</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('adv1')}>
            <View style={{width:20,height:20,marginTop:7,marginLeft:40,}}>
                <View style={{width:10,height:10,backgroundColor:'#BEBEBE',marginTop:3,marginLeft:3,borderRadius:5}}>
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('adv2')}>
            <View style={{width:20,height:20,marginTop:7,marginLeft:15,borderRadius:10}}>
                <View style={{width:10,height:10,backgroundColor:'#BEBEBE',marginTop:5,marginLeft:5,borderRadius:5}}>
                </View>
            </View>
            </TouchableOpacity>
            <View style={{width:20,height:20,borderWidth:2,borderColor:'#2F8603',marginTop:7,marginLeft:15,borderRadius:10}}>
                <View style={{width:10,height:10,backgroundColor:'#043E03',marginTop:3,marginLeft:3,borderRadius:5}}>
                </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('login')}>         
            <View style={styles.next}>
                <Text style={{fontSize:20,color:'#000000'}}>Next</Text>
            </View>
            </TouchableOpacity>  
        </View>
        
    </View>
  )
}
const styles=StyleSheet.create(
    {
        image:{
            position: 'absolute',
            width: Dimensions.get('window').width,
            height:Dimensions.get('window').height*70/100
        },
        text:{
            marginTop:Dimensions.get('window').height*50/100,
            fontSize:45,
            marginLeft:30,
            color:'#000000'
        },
        text2:{
            marginLeft:30,
            marginRight:20,
            fontSize:22,
            fontStyle: 'sans-serif',
            color:'#000000'
            
        },
        v2:{
            width:250
        },
        bottomView:{
            flex:1,
            flexDirection:'row',
            marginTop:Dimensions.get('window').height*0.17,
            marginLeft:Dimensions.get('window').width*0.06,
            marginBottom:Dimensions.get('window').height*0.05,
        },
        skip:{
            justifyContent:'center',
            alignItems:'center',
            
            width:80,
            height:35,
            borderWidth:1,
            borderRadius:17,
            backgroundColor:''

        },
        next:{
            justifyContent:'center',
            alignItems:'center',
            marginLeft:Dimensions.get('window').width*0.15,
            width:80,
            height:35,
            borderWidth:1,
            borderRadius:17,
            backgroundColor:'#FF9900'

        }
    }
)

export default AdvScreen3