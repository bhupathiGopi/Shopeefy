import React from "react";
import { View,Text,FlatList,Image } from "react-native";

const PopularItems=(props)=>{
    const itemList= props.list;
    return(
        <View style={{height:280}}>
       <FlatList nestedScrollEnable={true}
      horizontal={false}
      numColumns={3}
       data={itemList}
       initialNumToRender={6}
       keyExtractor={(item)=> '#'+'#'+item.name}
       renderItem={({item})=>
       <View style={{height:120,width:110,
                  backgroundColor:'#ffffff',
                  justifyContent:'center',
                  alignItems:'center',
                  marginRight:10,
                  marginTop:15,
                  borderRadius:10
                }}><Image source={{uri:item.image}} style={{height:80,width:80}}/>
                <Text>{item.name}</Text>
                </View>}
      />
      </View>
    )
}

export default PopularItems