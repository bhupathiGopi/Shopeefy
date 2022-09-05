import React from 'react'
import { View,Text,Image,StyleSheet,FlatList } from 'react-native'
const datalist=[{title:'Top offers on bestselling mobile accessories',image:'https://i.ibb.co/sHGWNQd/mobile-accessories-01-1.png'},
                {title:'Best Sellers in Computers & Accessories',image:'https://i.ibb.co/XVxtD2r/Computers-Accessories-01-1.png'}]
const CategoriseItems = () => {
  return (
         <View style={{marginTop:10}}>
        <FlatList nestedScrollEnable={true}
        data={datalist}
        numColumns={2}
        keyExtractor={(item)=>'#'+item.title}
        renderItem={({item})=>{
            return(
            <View style={{height:350,width:180,marginRight:0}}>
                <Image source={{uri:item.image}} style={{height:300,width:165,borderRadius:15}}/>
                <Text style={{marginTop:10,fontSize:15,color:'#000000'}}>{item.title}</Text>
            </View>
            )
        }}
        />
        </View>
  )
}

export default CategoriseItems;