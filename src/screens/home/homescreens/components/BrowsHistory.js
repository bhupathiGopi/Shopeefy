import React from 'react'
import { View,Image,FlatList } from 'react-native'
const browsItems=[{image:'https://i.ibb.co/x51G2fS/image-1.png'},
                  {image:'https://i.ibb.co/DYSqXgR/image-3.png'},
                  {image:'https://i.ibb.co/jfZ9SGk/Printer-1.png'},
                  {image:'https://i.ibb.co/cbHkd23/Washer-Dryer-1.png*/'},
                  {image:'https://i.ibb.co/m9zwMSZ/Earbuds-01-1.png'},
                  {image:'https://i.ibb.co/b2BJnTv/6t8-Zh249-Qi-Fm-Vnk-Qd-CCt-HK-1.png'}]
const BrowsHistory = () => {
  return (
    <View style={{marginTop:10}}>
        <FlatList nestedScrollEnable={true}
        data={browsItems}
        numColumns={3}
        keyExtractor={(item)=>'#'+'#'+item.image}
        renderItem={({item})=>{
            return(
                <View style={{padding:5}}>
                    <Image source={{uri:item.image}} style={{height:120,width:110,marginBottom:10,borderRadius:10}}/>
                </View>
            )
        }}
        />
    </View>
  )
}

export default BrowsHistory