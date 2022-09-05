import React ,{useContext, useState}from 'react'
import { View,Text,ImageBackground,StyleSheet,Dimensions,TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../authcontext/AuthProvider';
import Feather from 'react-native-vector-icons/Feather'
//import auth from '@react-native-firebase/auth';

const SignupScreen = ({navigation}) => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [username,setUsername]=useState();
    const [confirmPassword,setConfirmPassrord]=useState();
    const [secure,setSecure]=useState(true);
    const [confirmSecure,setConSecure]=useState(true);
   const {register}= useContext(AuthContext);
   const {error2}=useContext(AuthContext);
  return (
    <View>
      <ImageBackground source={{uri:'https://i.ibb.co/4fMgKBL/Login-BG-01-2.png'}}
              style={styles.image}>
        <View style={styles.middleView}>
          <View style={{paddingLeft:5}}>
           <Text style={styles.register}>Register</Text>
          <TextInput style={styles.textinput} 
           placeholder="Usar Name" 
           placeholderTextColor={'#000000'}
           onChangeText={(username)=>setUsername(username)}
           />
           <View style={{height:25}}></View>
           <TextInput style={styles.textinput} 
           placeholder="Email" 
           placeholderTextColor={'#000000'}
           onChangeText={(mail)=>setEmail(mail)}
           />
           <View style={{height:25}}></View>
           <View style={styles.password}>
           <TextInput style={{fontSize:20}}
                      secureTextEntry={secure}
                      placeholder="Password" 
                      placeholderTextColor={'#000000'}
                      onChangeText={(password)=>setPassword(password)}
                      />   
            <Feather name={secure? 'eye':'eye-off' } size={30} style={{position:'absolute',marginTop:14,marginLeft:230}} onPress={()=> secure? setSecure(false):setSecure(true)}/>
           </View>
           <View style={{height:25}}></View>
           <View style={styles.password}>
           <TextInput style={{fontSize:20}}
                      secureTextEntry={confirmSecure}
                      placeholder="Confirm Password" 
                      placeholderTextColor={'#000000'}
                      onChangeText={(password)=>setConfirmPassrord(password)}
                      />   
            <Feather name={confirmSecure? 'eye':'eye-off' } size={30} style={{position:'absolute',marginTop:14,marginLeft:230}} onPress={()=> confirmSecure? setConSecure(false):setConSecure(true)}/>
           </View>
           {error2 ? <Text style={styles.error}>{error2}</Text>:null}
            <TouchableOpacity onPress={()=>register(email,password)}>
            <View style={styles.loginbutton}>
              <Text style={{fontSize:25,fontWeight:'600'}}>Sign Up</Text>
            </View>
            </TouchableOpacity>
            
              <View style={styles.lastView}>
                <Text style={{color:'#000000',fontSize:15}}>Already have an account. Click here to </Text>
                <TouchableOpacity onPress={()=> navigation.navigate('login')}>
                <Text style={{fontSize:17,fontWeight:'700',color:'#000000',marginTop:-3}}>Login</Text>
                </TouchableOpacity>
              </View>
            
            </View>
        </View>
        <View>
          <Text style={{color:'#ffffff',fontSize:13,marginTop:16,textAlign:'center',marginLeft:20,marginRight:20}}>By preceding, I accept shopify shopping service 
          <Text style={{fontWeight:'700',fontSize:14}}> terms and conditions </Text>
          and confirm that I have read shopify 
          <Text style={{fontWeight:'700',fontSize:14}}> privacy policy </Text>. Like in the app are sponsored.</Text>
        </View>
      </ImageBackground>
    </View>
  )
}
const styles=StyleSheet.create({
  image:{
    alignItems:'center',
    marginTop:-50,
    width:Dimensions.get('screen').width,
    height:Dimensions.get('screen').height
  },
  middleView:{
    width:330,
    height:630,
    marginTop:90,
    backgroundColor:'#ffffff',
    borderRadius:20
  },
  register:{
    margin:25,
    fontSize:45,
    fontWeight:'bold',
    color:'#2F8603'
  },
  textinput:{
    height:65,
    width:280,
    borderWidth:1,
    borderColor:'#C4C4C4',
    marginLeft:20,
    paddingLeft:15,
    borderRadius:32.5,
    fontSize:20,
  },
  password:{
    flexDirection:'row',
    borderWidth:1,
    borderColor:'#c4c4c4',
    height:65,
    width:280,
    marginLeft:20,
    paddingLeft:20,
    borderRadius:32.5,
    fontSize:20,
  },
  loginbutton:{
    marginTop:20,
    height:65,
    width:280,
    marginLeft:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FF9900',
    borderRadius:32.5
  },
  lastView:{
    marginLeft:10,
    marginTop:50,
    flexDirection:'row'
  },
  error:{
    color:'red',
    marginLeft:22
  }
})

export default SignupScreen;