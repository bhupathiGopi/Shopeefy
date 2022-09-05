import React, {useEffect,useState}from 'react'
import { View,Text,StyleSheet,Image } from 'react-native';
import auth from '@react-native-firebase/auth';
const SpraceScreen = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [Login,setlogin]=useState(true)
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
    useEffect(()=>{
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
       setTimeout(()=>
        //{if(!user) {navigation.navigate('adv1')} else {navigation.navigate('home')}} 
         { Login ? navigation.navigate('home1'):navigation.navigate('adv1') }
      ,4000);
      return subscriber;
    },[])

    
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#036D47'}}>
        <View style={styles.middleView}>
         <Image source={{uri:'https://i.ibb.co/gjzGbr7/Shopify-Logo-3.png'}} style={{height:100,width:100}}/>
         <Image source={{uri:'https://i.ibb.co/kq9qT6q/Shopify-Logo-01-1.png'}} style={{height:30,width:100}}/>
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
  middleView:{
    height:140,
    width:140,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  }
})
export default SpraceScreen