import React from 'react'
import { View,StyleSheet,Text,Image,TouchableOpacity } from 'react-native';
import * as RootNavigation from '../../../../rootnavigation/RootNavigation';


const ItemView = (lists) => {
     const item=lists.items;
    //console.log(lists.items.title);
    //let number = 1234567890;
    //   let num=number.toLocaleString();
  return (
    <TouchableOpacity onPress={()=>RootNavigation.navigate('itemdetails',{item})}>
    <View style={styles.outView} >
       <Text style={{color:'#3C8F34',fontWeight:'700',fontSize:17,marginBottom:5}}>{lists.items.modelName}</Text>
       <Image source={{uri:lists.items.image}} style={{height:120,width:100}}/>
       <View style={{height:37}}>
          <Text style={{color:'#000000',fontSize:10,fontWeight:'600'}}>{lists.items.title}</Text>
       </View>  
       <Text style={{textDecorationLine: 'line-through',color:'#FF4D00', marginTop:15}}>price {lists.items.mrp}</Text>  
       <Text>Best Offer</Text> 
       <View style={{ marginTop:10, height:30,width:140,backgroundColor:'#FF9900',alignItems:'center',justifyContent:'center',borderRadius:15}}>
      <Text style={{fontSize:11,color:'#000000',fontWeight:'500'}}>Best Price :{lists.items.price}</Text>
       </View>
    </View>
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
  outView:{
    height:300,
    width:165,
    alignItems:'center',
    marginRight:10,
    marginLeft:5,
    shadowColor: '#000000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    marginBottom:10,
    marginTop:5,
    backgroundColor:'rgb(255,255,255)',
    padding:10,
    borderRadius:15

  }
})
export default ItemView