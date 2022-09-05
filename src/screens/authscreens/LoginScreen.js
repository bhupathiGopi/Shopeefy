import React ,{useState,useContext}from 'react'
import { View,Text,
          ImageBackground,
          StyleSheet,Dimensions
          ,TextInput,
           TouchableOpacity } from 'react-native';
import { AuthContext } from '../../authcontext/AuthProvider';
import Feather from 'react-native-vector-icons/Feather'

const LoginScreen = ({navigation}) => {
      const [email,setEmail]=useState();
      const [password,setPassword]=useState();
      const {login}=useContext(AuthContext);
      const {error1}=useContext(AuthContext);
      const {user} =useContext(AuthContext);
      const [secure,setSecure]=useState(true);
  return (
    <View style={styles.image}>
      <ImageBackground source={{uri:'https://i.ibb.co/4fMgKBL/Login-BG-01-2.png'}}
      resizeMode="cover" style={styles.image}>
        <View style={styles.middleView}>
           <Text style={styles.login}>Login</Text>
           <TextInput style={styles.textinput} 
           placeholder="Usar Name" 
           placeholderTextColor={'#000000'}
           onChangeText={(mail)=>setEmail(mail)}
           />
           <View style={{height:20}}></View>
           <View >
           <TextInput style={styles.password}
                      secureTextEntry={secure}
                      placeholder="password" 
                      placeholderTextColor={'#000000'}
                      onChangeText={(password)=>setPassword(password)}
                      />   
            <Feather name={secure? 'eye-off':'eye' } size={30} style={{position:'absolute',
            marginTop:17,marginLeft:250}} 
            onPress={()=> secure? setSecure(false):setSecure(true)}/>
           </View>
           {error1 ? <Text style={styles.error}>{error1}</Text>:null}
           <View>
             <Text style={styles.forget}>Forget password</Text>
            </View> 
            <TouchableOpacity onPress={()=>login(email,password)}>
            <View style={styles.loginbutton}>
              <Text style={{fontSize:25,fontWeight:'600',color:'#000000'}}>Login</Text>
            </View>
            </TouchableOpacity>
            
        </View>
        
              <View style={styles.lastView}>
                <Text style={{color:'#ffffff',fontSize:16}} >Don't have an account, Click here to </Text>
                <TouchableOpacity onPress={()=> {navigation.navigate('signup')}}>
                  <Text style={{color:'#ffffff',fontSize:16,
                  fontWeight:'700',textDecorationLine:'underline'}}>Register</Text>
                </TouchableOpacity>
               
              </View>
      </ImageBackground>
    </View>
  )
}
const styles=StyleSheet.create({
  image:{
    marginTop:-30,
    alignItems:'center',
    width:Dimensions.get('screen').width,
    height:Dimensions.get('screen').height
  },
  middleView:{
    width:330,
    height:450,
    marginTop:190,
    backgroundColor:'#ffffff',
    borderRadius:20
  },
  login:{
    marginLeft:30,
    marginTop:30,
    fontSize:45,
    fontWeight:'bold',
    color:'#2F8603'
  },
  textinput:{
    height:60,
    marginTop:20,
    width:280,
    borderWidth:1,
    borderColor:'#c4c4c4',
    marginLeft:20,
    paddingLeft:20,
    borderRadius:30,
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
  forget:{
    marginLeft:180,
    marginTop:10,
    color:'#000000'
  },
  loginbutton:{
    marginTop:30,
    height:60,
    width:280,
    marginLeft:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FF9900',
    borderRadius:30
  },
  lastView:{
    marginLeft:10,
    marginTop:25,
    height:40,
    width:330,
    flexDirection:'row'
  },
  error:{
    color:'red',
    marginLeft:22
  }
})

export default LoginScreen