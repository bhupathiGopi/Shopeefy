import React from 'react'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'
import { View,Text,Image,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
const CustomDrawer = (props) => {
  return (
    <View style={{flex:1,backgroundColor:'#000000'}}>
       <DrawerContentScrollView {...props} 
        contentContainerStyle={{backgroundColor:'#000000',}}
        
        >
          <View style={{flexDirection:'row'}}>
            <Image source={require('../drawer/User3.png')} style={styles.image}/>
            <View>
              <Text style={{fontSize:18,fontWeight:'700',marginTop:48,marginLeft:10,color:'#ffffff'}}>User Name</Text>
              <Text style={{fontSize:12,fontWeight:'400',marginTop:10,marginLeft:10,color:'#ffffff'}}>UserID@gmail.com</Text>
            </View>
          </View>  
            <DrawerItemList {...props} />
       </DrawerContentScrollView>
       <View>
        <Text style={{marginBottom:20}}>version 0.0.1</Text>
       </View>
    </View>
  )
}
const styles=StyleSheet.create({
    image:{
    
        hight:67,
        width:67,
        marginTop:36,
        marginLeft:37,
        borderColor:'#ffffff',
        borderRadius:33.75
    }
})
export default CustomDrawer