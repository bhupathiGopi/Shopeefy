import React , {useState}from 'react';
import { ceil } from 'mathjs';
import { View,Text,StyleSheet,ScrollView,Image,FlatList,TouchableOpacity } from 'react-native'
import Ionicon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import * as RootNavigation from '../../../../rootnavigation/RootNavigation';
import BrowsHistory from '../components/BrowsHistory';
//import { FormattedNumber } from 'react-native-globalize';
/*const numberFormat = (value) => {
    var re = '\\d(?=(\\d{' + 3 + '})+' + '\\D' + ')';
    var num = value.toFixed(Math.max(0,~~2));
    var str = num.replace(new RegExp(re, 'g'), '$&' + ',');
    return str;
} */
export const getFormattedNumber = number => {
    let formattedNumber = Number.parseInt(number).toLocaleString('en-IN');
    return formattedNumber;
}
const ItemDetailScreen = ({ route}) => {
    const item=route.params.item;
    const [color,setColor]=useState(item.colors[0].color);
    const [storage,setStorage]=useState(item.storage[0].type);
    const colorType=item.colors;
    const sizes=item.storage;
    const extraOffers=item.extraOffers;
    const [styleName,setStyleName]=useState(item.extraOffers[0].type);
    const [data,setData]=useState(colorType);
    const [selectStorage,setSelectStorage]=useState(sizes);
    const [selectstylename,setSelectStyle]=useState(extraOffers)
    const onSelectColor=(item,index)=>{
           const newArrData= data.map((e,index)=>{
           if(item.color==e.color){
            setColor(item.color)
            return{
                ...e,
                selected:true
            }
           }
           return{...e,selected:false }
        })
        setData(newArrData)
    };
    const onSelectSize=(item,index)=>{
            const newArrData2= selectStorage.map((c,index)=>{
           // console.log(selectStorage);
           if(item.type==c.type){
            setStorage(item.type)
            return{...c,selected:true }
           }
           return{...c,selected:false }
        })
        setSelectStorage(newArrData2)
    } 
    const onSelectStyleName=(item,index)=>{
        const newArrData3=selectstylename.map((c,index)=>{
            if(item.type==c.type){
                setStyleName(item.type)
                return{...c,selected:true}
            }
            return{...c,selected:false}
        })
        setSelectStyle(newArrData3)
    }
 const renderItem=({item,index})=>{
    return(
        <TouchableOpacity onPress={()=>{onSelectColor(item,index)}}>
        <View style={{height:220,width:125,marginTop:13,}}>
          <View style={{height:115,width:115,
             shadowColor: '#000000',
             shadowOffset: { width: 3, height: 3 },
             shadowOpacity: 0.9,
             shadowRadius: 3,
             elevation: 3,alignItems:'center',borderRadius:10,
             marginTop:5,
             backgroundColor: item.selected? 'green':'rgb(255,255,255)',
              }}>
             <Image source={{uri:item.image}} style={{height:65,width:65,marginTop:22}}/>
           </View>
           <Text style={{alignSelf:'center',fontSize:15,fontWeight:'700',color:'#000000',marginTop:8}}>{item.color}</Text>
        </View>
        </TouchableOpacity>
        )
}

  return (
    <View>
        <View style={styles.navigationView}>
         <Ionicon name='arrowleft' size={45} style={{marginLeft:10,color:'#000000'}} onPress={()=>RootNavigation.navigate('itemlist')}/>             
         <MaterialIcon name='add-shopping-cart' size={30} style={{marginLeft:300,color:'#000000'}}/>
        </View>
        <ScrollView style={styles.body} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
            <Text style={{fontSize:28,fontWeight:'700',fontStyle:'sans',marginTop:5,color:'#000000'}}>{item.companyName} {item.modelName}</Text>
            <View style={{marginTop:17,height:280,borderRadius:10,
                           shadowColor: '#000000',
                           shadowOffset: { width: 3, height: 3 },
                           shadowOpacity: 1,
                           shadowRadius: 5,
                           elevation: 5,
                           backgroundColor:'rgb(255,255,255)'
                           }}>
                <View style={{flexDirection:'row',borderTopLeftRadius:10,marginTop:5}}>
                 <Image source={{uri:item.image}} style={{height:210,width:180,marginLeft:80,marginTop:30}}/>
                 <View style={{height:100,width:50,marginLeft:55,alignItems:'center',}}>
                     <Feather name='share-2'size={30} style={{marginBottom:10,marginTop:10}}/>
                     <MaterialIcon name='favorite-border' size={30}/>
                 </View>
               </View>
               <View>
                
               </View>
            </View>
            <View style={{height:365,marginTop:20,borderRadius:10,
                           shadowColor: '#000000',
                           shadowOffset: { width: 3, height: 3 },
                           shadowOpacity: 0.9,
                           shadowRadius: 3,
                           elevation: 5,
                           backgroundColor:'rgb(255,255,255)'
                           }}>
                 <Text style={{fontSize:18,marginTop:15, fontWeight:'700',color:'#000000',marginLeft:15}}>{item.title}</Text>
                 <Text style={{marginLeft:15,fontSize:18,color:'#000000',marginTop:10}}>Visit the {item.companyName} Store</Text>
                 <View style={{height:40,flexDirection:'row',paddingLeft:10}}>
                   {item.rating >=1? <MaterialIcon name='star' size={30}  color={'#ff9900'}style={{}}/> :<MaterialIcon name='star-border' size={30} />}
                   {item.rating >=2? <MaterialIcon name='star' size={30}  color={'#ff9900'}style={{}}/> :<MaterialIcon name='star-border' size={30} />}
                   {item.rating >=3? <MaterialIcon name='star' size={30}  color={'#ff9900'}style={{}}/> :<MaterialIcon name='star-border' size={30} />}
                   {item.rating >=4? <MaterialIcon name='star' size={30}  color={'#ff9900'}style={{}}/> :<MaterialIcon name='star-border' size={30} />}
                   {item.rating >=5? <MaterialIcon name='star' size={30}  color={'#ff9900'}style={{}}/> :<MaterialIcon name='star-border' size={30} />}
                   <Text style={{marginLeft:10,color:'#ff9900',fontSize:20,marginTop:3,textDecorationLine:'underline'}}>{item.feedback} ratings</Text>
                 </View>
                 <View style={{alignItems:'flex-end',paddingRight:15}}>
                    <Text style={{color:'#FF4D00',fontSize:19}}>M.R.P      :   <Text style={{color:'#FF4D00',textDecorationLine:'line-through'}}> ₹ 
                    {getFormattedNumber(item.mrp)}.00</Text></Text>
                    <Text style={{color:'#2F8603',fontSize:30,marginTop:5,fontWeight:'700'}}>Price   :  ₹  {getFormattedNumber(item.price)}.00</Text>
                    <Text style={{fontSize:17,color:'#000000'}}>You Save  : 
                    <Text style={{fontWeight:'600'}}>₹ {getFormattedNumber((item.mrp-item.price))}.00({ceil((item.mrp-item.price)/item.mrp*100)}%)</Text></Text>
                    <View style={{width:250,alignItems:'flex-end',marginTop:50}}>
                        <Text style={{fontSize:16,color:'#000000'}}>EMI starts at ₹ 5,178. No Cost EMI </Text>
                        <Text style={{fontSize:16,color:'#000000'}}>available <Text style={{fontSize:18,fontWeight:'600',textDecorationLine:'underline'}}> EMI options</Text></Text>
                    </View>
                 </View>
            </View>
            
            <View style={{marginTop:40}}>
                <Text style={{fontSize:20,color:'#000000'}}>Colors:  <Text style={{fontWeight:'700'}}>{color}</Text></Text>
                <View style={{height:180}}>
                    <FlatList nestedScrollEnable={true}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={(items)=>items.image}
                    renderItem={renderItem}
                    />
                </View>
            </View>
            <View>
                <Text style={{fontSize:18,color:'#000000'}}>Size:  <Text style={{fontWeight:'700'}}>{storage}</Text></Text>
                <View style={{height:160}}>
                    <FlatList nestedScrollEnable={true}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={selectStorage}
                    keyExtractor={(items)=>items.type}
                    renderItem={({item})=>
                        {
                       return(
                        <TouchableOpacity onPress={()=>{onSelectSize(item)}}>
                       <View style={{width:125,marginTop:13 ,}}>
                         <View style={{height:110,width:115,
                            shadowColor: '#000000',
                            shadowOffset: { width: 3, height: 3 },
                            shadowOpacity: 0.9,
                            shadowRadius: 3,
                            elevation: 3,
                            justifyContent:'center',alignItems:'center',borderRadius:10,marginLeft:0,
                            marginTop:5,
                            backgroundColor: item.selected? 'green':'rgb(255,255,255)',
                             }}>
                            <Text style={{fontSize:18,textAlign:'center',color:'#000000'}}>{item.type}</Text>
                          </View>
                          
                       </View></TouchableOpacity>
                       )
                    }
                    }
                    />
                </View>
            </View>
            <View style={{height:200}}>
               <View style={{flexDirection:'row'}}>
                  <Text style={{fontSize:18,color:'#000000'}}>Style name : : </Text>
                  <View style={{width:170}}>
                  <Text style={{fontSize:18,fontWeight:'700',color:'#000000'}}>{styleName}</Text>
                  </View>
               </View>
               <FlatList nestedScrollEnable={true}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={selectstylename}
                    keyExtractor={(items)=>items.type}
                    renderItem={({item})=>
                    {return(
                    <TouchableOpacity onPress={()=>{onSelectStyleName(item)}}>   
                    <View style={{height:130,width:175,marginRight:10,marginTop:10,
                    alignItems:'center',justifyContent:'center',
                    padding:10,borderRadius:10,
                    shadowColor: '#000000',
                            shadowOffset: { width: 3, height: 3 },
                            shadowOpacity: 0.9,
                            shadowRadius: 3,
                            elevation: 3,
                            backgroundColor:item.selected? 'green':'rgb(255,255,255)'}}>
                        <Text style={{textAlign:'center',fontSize:18,color:'#000000'}}>{item.type}</Text>
                    </View>
                    </TouchableOpacity> 
                    )}}
               />
            </View>
            <TouchableOpacity onPress={()=>RootNavigation.navigate('payment',item.price)}>
            <View style={{backgroundColor:'#ff9900',height:70,borderRadius:35,justifyContent:'center',alignItems:'center',marginTop:10}}>
                <Text style={{fontSize:23,color:'#000000',fontWeight:'700'}}>Order Now</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>RootNavigation.navigate('Cart')}>
            <View style={{height:70,justifyContent:'center',alignItems:'center',marginTop:17,borderColor:'#A9A9A9',borderWidth:1,borderRadius:35}}>
                <Text style={{fontSize:23,color:'#000000'}}>Add to Cart</Text>
            </View>
            </TouchableOpacity>
            <View style={{marginTop:30}}>
                <Text style={{fontSize:23,fontWeight:'700',color:'#000000'}}>Today your browsing</Text>
                <BrowsHistory />
            </View>
            <View style={{height:100}}></View>
        </ScrollView>
    </View>
  )
}
const styles=StyleSheet.create({
    navigationView:{height:80,
        flexDirection:'row',
        margin:-5,
        borderBottomWidth:0,
        shadowColor:'#000000',
        shadowOpacity:0.9,
        shadowRadius:0,
        shadowOffset:{height:3,width:0},
        elevation:4,
        alignItems:'center',
    },
    body:{
        margin:16,
    
    }  
})
export default ItemDetailScreen 