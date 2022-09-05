import React from 'react'
import { View, Text , 
         StyleSheet,Image,
         Alert,FlatList,
         ScrollView,
         ImageBackground,
        TouchableOpacity,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcom from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo' 
import MyOrders from '../drawer/MyOrders';
import ShopByCategory from '../drawer/ShopByCategory';
import Offers from '../drawer/Offers';
import MyList from '../drawer/MyList';
import CustomerService from '../drawer/CustomerService';
import FAQ from '../drawer/FAQ';
import LogOut from '../drawer/LogOut';
import CustomDrawer from './CustomDrawer';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import PopularItems from './components/PopularItems';
import CategoriseItems from './components/CategoriseItems';
import BrowsHistory from './components/BrowsHistory';
import { DrawerActions } from '@react-navigation/native';
const Drawer=createDrawerNavigator();
const itemList=[{name:'Mobile',image:'https://i.ibb.co/qWdKbyg/iphone-1.jpg'},
                {name:'Laptop',image:'https://i.ibb.co/6WLWHC5/laptop-1.webp'},
                {name:'Tablet',image:'https://i.ibb.co/2MwbXq5/tabs-1.webp'},
                {name:'Earbuds',image:'https://i.ibb.co/BNpZYRJ/buds-1.jpg'},
                {name:'Camera',image:'https://i.ibb.co/pyy80JH/camera-1.jpg'},
                {name:'SmartPhone',image:'https://i.ibb.co/bv8c4Lx/HTC-u11.webp'},
                {name:'Appliences',image:'https://i.ibb.co/ZLcGC3x/Slider-one-Bg02-3.png'}]

const Home = () => {
  return (
   <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} 
             screenOptions={{headerShown:false,lableStyle:{
              marginLeft:20,
              
            } }}
             >
      <Drawer.Screen name='Home' component={Main} drawerStyle={DrawerItemList}/>
      <Drawer.Screen name='My Orders' component={MyOrders}/>
      <Drawer.Screen name='Shop by category' component={ShopByCategory}/>
      <Drawer.Screen name='Offers' component={Offers}/>
      <Drawer.Screen name='My List' component={MyList}/>
      <Drawer.Screen name='Customer Service' component={CustomerService}/>
      <Drawer.Screen name='FAQ' component={FAQ}/>
      <Drawer.Screen name='LogOut' component={LogOut}/>
   </Drawer.Navigator>
  )
}
const Main=({navigation})=>{
  return(
  
    <View style={styles.main}>
      <StatusBar backgroundColor={'red'}/>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.navigate('DrawerOpen')}>
        <View style={{width:24,
          height:20,
          marginLeft:16,
          marginTop:25,
          alignItems:'center'}}>
            <View style={{height:3,width:24,backgroundColor:'#A9A9A9',marginBottom:3}}></View>
            <View style={{height:3,width:24,backgroundColor:'#A9A9A9',marginBottom:3}}></View>
            <View style={{height:3,width:24,backgroundColor:'#A9A9A9',marginBottom:3}}></View>
        </View>
        </TouchableOpacity>
        <Image source={require('../../../images/ShopifyLogo021.jpg')} 
        style={{height:30,width:100,marginTop:18,marginLeft:8}}/>
        <Icon name="search" size={24} onPress={()=>{Alert.alert("Facebook Button Clicked")}} 
        style={{marginLeft:100,marginTop:20}}></Icon> 
        <MaterialIcom name="notifications-none" size={30} onPress={()=>{Alert.alert("Facebook Button Clicked")}}
        style={{marginLeft:20,marginTop:20}}></MaterialIcom>
        <MaterialCommunityIcon name="cart-outline" size={30} onPress={()=>{Alert.alert("Facebook Button Clicked")}}
         style={{marginLeft:20,marginTop:20}}
        ></MaterialCommunityIcon>
      </View>
      <ScrollView nestedScrollEnabled={true}>
      <View style={styles.categorise}>
        <TouchableOpacity onPress={()=>navigation.navigate('Categorise')}>
        <View>
         <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#ffffff',height:50,width:50,marginTop:8,marginLeft:30,borderRadius:5}}>
         <MaterialIcom name='list' size={40}/>
         </View>
         <Text style={{fontSize:12,color:'#000000',marginLeft:16}}>All Categorise</Text>
        </View> 
        </TouchableOpacity>
        
        <View>
        <FlatList 
          horizontal={true}
          nestedScrollEnable={true}
          showsHorizontalScrollIndicator={false}
          data={itemList}
          renderItem={({item})=>
          <View style={{alignItems:'center',justifyContent:'center',height:62,width:70,marginTop:8,borderRadius:5}}>
            <TouchableOpacity onPress={()=>navigation.navigate('itemlist',{item:{item}})}>
            <View style={{backgroundColor:'#ffffff',height:50,width:50,padding:5}}>
              <Image  source={{uri:item.image}} style={{height:40,width:40,}}/>
            </View>
            </TouchableOpacity>
            <Text style={{fontSize:12,color:'#000000'}}>{item.name}</Text>
          </View>
        }
          keyExtractor={(key)=>key.name}
          />
        </View>
      </View>
      <View style={{height:200,width:'96%',marginTop:15,marginLeft:8}}>
        <ImageBackground source={{uri:'https://i.ibb.co/hDTm3N7/Landing-Page-Banner-1.png'}} imageStyle={{borderRadius:7}} >
          <View style={{height:200,width:'100%',paddingLeft:25}}>
             <Text style={{fontSize:23,fontWeight:'700',color:'#ffffff',marginTop:30}}>Electronic</Text>
             <Text style={{fontSize:21,fontWeight:'600',color:'#000000'}}>Home Applience</Text>
             <Text style={{fontSize:15,fontWeight:'bold',color:'#ffffff'}}>Flash Sale</Text>
             <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:35,fontWeight:'bold',color:'#ffffff'}}>70</Text>
              <View>
                <Text style={{fontSize:12,fontWeight:'400',color:'#ffffff',marginTop:5}}>upto</Text>
                <Text style={{fontSize:15,color:'#ffffff'}}>%</Text>
              </View>
              <Text style={{fontSize:22,fontWeight:'bold',color:'#ffffff',marginTop:10}}>OFF</Text>
             </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{borderWidth:0,height:80,width:'90%',marginLeft:20,marginTop:15,backgroundColor:'#c0c0c0',flexDirection:'row'}}>
        <View style={{height:'100%',width:15}}>
          <View style={{height:10,width:10,marginLeft:-5,borderRadius:5,marginTop:10,backgroundColor:'#E0E0E0'}}></View>
          <View style={{height:20,width:20,marginLeft:-10,borderRadius:10,marginTop:10,backgroundColor:'#E0E0E0'}}></View>
          <View style={{height:10,width:10,marginLeft:-5,borderRadius:5,marginTop:10,backgroundColor:'#E0E0E0'}}></View>
        </View>
        <View style={{height:'100%',width:323,flexDirection:'row'}}>
          <View style={{transform: [{ rotate: '270deg'}],marginLeft:-10,marginTop:18,width:80,height:40}}>
            <Text style={{textAlign:'center',fontSize:9,fontWeight:'900'}}>YOUR</Text>
            <Text style={{textAlign:'center',fontSize:12,fontWeight:'900'}}>COUPON</Text>
          </View>
          <View style={{height:25,width:25,marginLeft:-10,marginTop:20}}>
            <Text style={{fontSize:25}}>₹</Text>
          </View>
          <View style={{height:'100%',width:140}}>
              <Text style={{color:'#FF9900',fontSize:17,fontWeight:'700',marginTop:5}}>Extra</Text>
              <Text style={{color:'#000000',fontSize:30,marginTop:-10,marginLeft:-8,fontWeight:'700'}}>100 OFF</Text>
              <Text style={{marginTop:-8}}>Home Applience</Text>
          </View>
          <View style={{height:35,width:2,backgroundColor:'#7e7e7e',marginTop:20}}></View>
          <View style={{height:30,width:70,backgroundColor:'#ff9900',alignItems:'center',justifyContent:'center',marginTop:25,marginLeft:20,borderRadius:15}}>
             <Text style={{fontSize:12,color:'#000000'}}>Shop Now</Text>
          </View>
        </View>
        <View style={{height:'100%',width:15,alignItems:'flex-end'}}>
          <View style={{height:10,width:10,marginRight:-5,borderRadius:5,marginTop:10,backgroundColor:'#E0E0E0'}}></View>
          <View style={{height:20,width:20,marginRight:-10,borderRadius:10,marginTop:10,backgroundColor:'#E0E0E0'}}></View>
          <View style={{height:10,width:10,marginRight:-5,borderRadius:5,marginTop:10,backgroundColor:'#E0E0E0'}}></View>
        </View>
      </View>
      <View style={{marginLeft:20,marginTop:10}}>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:20,fontWeight:'800',color:'#000000'}}>Popular Products</Text>
          <Text style={{marginLeft:125,marginTop:4,color:'green',fontSize:14,fontWeight:'600'}}>See More</Text>
          <Entypo name='chevron-right'size={25} color={'green'} style={{marginLeft:-3,marginTop:2}}/>
        </View>
        <PopularItems list={itemList}/>
      </View>
      <View style={{marginLeft:20,marginTop:10}}>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:20,fontWeight:'800',color:'#000000'}}>Categorise</Text>
          <Text style={{marginLeft:180,marginTop:4,color:'green',fontSize:14,fontWeight:'600'}}>See More</Text>
          <Entypo name='chevron-right'size={25} color={'green'} style={{marginLeft:-3,marginTop:2}}/>
        </View>
        <CategoriseItems />
      </View>
      <View style={{marginLeft:20,marginTop:10}}>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:20,fontWeight:'800',color:'#000000'}}>Your Browsing History</Text>
          <Text style={{marginLeft:80,marginTop:4,color:'green',fontSize:14,fontWeight:'600'}}>See More</Text>
          <Entypo name='chevron-right'size={25} color={'green'} style={{marginLeft:-3,marginTop:2}}/>
        </View>
         <BrowsHistory />
      </View>
  

      <View style={{height:100}}></View>
      </ScrollView>
    </View>
  )
}
 const styles=StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'#E0E0E0'
  },
  header:{
    backgroundColor:'#ffffff',
    height:70,
    width:'100%',
    flexDirection:'row'
  },
  headerbars:{
    
    marginTop:9,
    backgroundColor:'#A9A9A9'
  },
  categorise:{
    width:'100%',
    height:75,
    backgroundColor:'#efefef',
    flexDirection:'row'
    
  }
 })
export default Home;