import React,{useEffect,useState} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,ScrollView,TextInput,FlatList} from 'react-native';
import axios from 'axios';
import Fontawesome from 'react-native-vector-icons/FontAwesome5';
import ItemView from '../components/ItemView';
const companies=[{name:'Samsung',id:1},
                 {name:'Redmi',id:2},
                 {name:'Realme',id:3},
                 {name:'Apple',id:4},
                 {name:'Oneplus',id:5},
                 {name:'Nothing1',id:6},];
const mobiles=[{" type": "Mobile",
"companyName":"Samsung",
"id":1,
"modelName":"Galaxy S22 Ultra",
"title":"Samsung Galaxy S22 Ultra 5G (Phantom Black, 12GB, 256GB Storage) with No Cost EMI/Additional Exchange Offers",
"image":"https://i.ibb.co/PcDHzjt/71-Wkk4n9ol-L-AC-SX679.jpg",
"rating":4,
"feedback":1478,
"mrp":131999.00,
"price":109999,
"colors":[{"color" : "Dark Red","image" : "https://i.ibb.co/PcDHzjt/71-Wkk4n9ol-L-AC-SX679.jpg","selected":"true"},
{"color" : "Phantom Black","image" : "https://i.ibb.co/zJRMGz5/81-Tf-EXWPc-IL-AC-SX679.jpg"},
{"color" : "Phantom White","image" : "https://i.ibb.co/N7gXgvZ/817a-OXLo-Np-L-AC-SX679.jpg"}],
"images":[{"img1":"https://i.ibb.co/PcDHzjt/71-Wkk4n9ol-L-AC-SX679.jpg",},
{"img2":"https://i.ibb.co/zJRMGz5/81-Tf-EXWPc-IL-AC-SX679.jpg"},
{"img3":"https://i.ibb.co/N7gXgvZ/817a-OXLo-Np-L-AC-SX679.jpg"}],
"storage":[{"type":"12GB RAM + 128GB Storage","selected":"true"},{"type":"12GB RAM + 256GB Storage"},{"type":"12GB RAM + 512GB Storage"}],
"extraOffers":[{"type":"with offer","selected":"true"},{"type":"with offer+S22 Ultra 5G + Watch 4"}]
},
{"type": "Mobile",
"companyName":"Samsung",
"id":2,
"modelName":"Galaxy S22 Ultra",
"title":"Samsung Galaxy S22 Ultra 5G (Phantom Black, 12GB, 256GB Storage) with No Cost EMI/Additional Exchange Offers",
"image":"https://i.ibb.co/zJRMGz5/81-Tf-EXWPc-IL-AC-SX679.jpg",
"rating":4,
"feedback":1478,
"mrp":131999.00,
"price":109999,
"colors":[{"color":"Dark Red","image":"https://i.ibb.co/PcDHzjt/71-Wkk4n9ol-L-AC-SX679.jpg"},
{"color":"Phantom Black","image":"https://i.ibb.co/zJRMGz5/81-Tf-EXWPc-IL-AC-SX679.jpg","selected":"true"},
{"color":"Phantom White","image":"https://i.ibb.co/N7gXgvZ/817a-OXLo-Np-L-AC-SX679.jpg"}],
"images":[{"img1":"https://i.ibb.co/PcDHzjt/71-Wkk4n9ol-L-AC-SX679.jpg"},
{"img2":"https://i.ibb.co/zJRMGz5/81-Tf-EXWPc-IL-AC-SX679.jpg","selected":"true"},
{"img3":"https://i.ibb.co/N7gXgvZ/817a-OXLo-Np-L-AC-SX679.jpg"}],
"storage":[{"type":"12GB RAM + 128GB Storage","selected":"true"},{"type":"12GB RAM + 256GB Storage"},{"type":"12GB RAM + 512GB Storage"}],
"extraOffers":[{"type":"with offer","selected":"true"},{"type":"with offer+S22 Ultra 5G + Watch 4"}]
},

{"type":"Mobile",
"companyName":"realme",
"id":3,
"modelName":"Galaxy S20 FE 5G",
"title":"Samsung Galaxy S22 Ultra 5G (Phantom Black, 12GB, 256GB Storage) with No Cost EMI/Additional Exchange Offers",
"image":"https://i.ibb.co/bBmW0Mt/51-Jx33-Kl0-FL-AC.jpg",
"rating":4,
"feedback":1546,
"mrp":14999.00,
"price": 13599,
"colors":[{"color":"Glowing Green","image":"https://i.ibb.co/bBmW0Mt/51-Jx33-Kl0-FL-AC.jpg","selected":"true"},
{"color":"Glowing Black","image":"https://i.ibb.co/s3rZ1BB/51-W6-WF0-N6-SL-AC-SX679.jpg"}],
"images":[{"color":"Green","img1":"https://i.ibb.co/s3rZ1BB/51-W6-WF0-N6-SL-AC-SX679.jpg",},
{"color":"White","img2":"https://i.ibb.co/bBmW0Mt/51-Jx33-Kl0-FL-AC.jpg"},
{"color":"Black","img3":"https://i.ibb.co/51gHSFF/61c-W27-JOn-GL-AC-SL1080.jpg"}],
"storage":[{"type":"4GB RAM + 128GB Storage","selected":"true"},{"type":"4GB RAM + 64GB Storage"}],
"extraOffers":[{"type":"with offer","selected":"true"},{"type":"with offer+S22 Ultra 5G + Watch 4"}]
},
{"type":"Mobile",
"companyName":"realme",
"id":4,
"modelName":"realme C35",
"title":"Realme narzo (Phantom Black, 12GB, 256GB Storage) with No Cost EMI/Additional Exchange Offers",
"image":"https://i.ibb.co/51gHSFF/61c-W27-JOn-GL-AC-SL1080.jpg",
"rating":4,
"feedback":1546,
"mrp":14999.00,
"price":12499,
"colors":[{"color":"Glowing Green","image":"https://i.ibb.co/bBmW0Mt/51-Jx33-Kl0-FL-AC.jpg"},
{"color":"Glowing Black","image":"https://i.ibb.co/51gHSFF/61c-W27-JOn-GL-AC-SL1080.jpg","selected":"true"}],
"images":[{"color":"Green","img1":"https://i.ibb.co/s3rZ1BB/51-W6-WF0-N6-SL-AC-SX679.jpg",},
{"color":"White","img2":"https://i.ibb.co/bBmW0Mt/51-Jx33-Kl0-FL-AC.jpg"},
{"color":"Black","img3":"https://i.ibb.co/51gHSFF/61c-W27-JOn-GL-AC-SL1080.jpg"}],
"storage":[{"type":"4GB RAM + 128GB Storage","selected":"true"},{"type":"4GB RAM + 64GB Storage"}],
"extraOffers":[{"type":"with offer","selected":"true"},{"type":"with offer+S22 Ultra 5G + Watch 4"}]

}]                 
const ItemList = ({navigation,route}) => {
//  const [result,setResults]=useState();
//  useEffect(()=>{
//    axios.get('https://bitbucket.org/!api/2.0/snippets/gopiramyacrazyproject-admin/RkqdeB/da12334353d1d0bca22ecc69dedadb7bce0f9f83/files/snippet.json')
      //'https://bitbucket.org/!api/2.0/snippets/gopiramyacrazyproject-admin/7kqoBr/bb34aa4a7d16453b1e52d4921b3999ef506a969a/files/db.json')
    //'https://bitbucket.org/!api/2.0/snippets/gopiramyacrazyproject-admin/4E7dG6/944ffc50bb5155d0569b905de13c63e0a30c77ec/files/exp.json')
 //   .then((response) => {
//    setResults(response.data);
 //    });
//    }, []);
//    const item=route.params.item;
 //   const name=item.item.name;
    
  return (
    <View style={{backgroundColor:'#ffffff'}}>
      <View style={styles.search}>
        <View style={{width:50,borderRightWidth:1,alignItems:'center',justifyContent:'center'}}>
           <Fontawesome name='search' size={30}/>
        </View> 
        <TextInput placeholder='Srerch' style={styles.textinput}/>  
      </View>
      <ScrollView style={{marginBottom:50}} nestedScrollEnabled={true}>
      <View style={styles.searchbycompany}>
         <Text style={{fontSize:20,fontWeight:'900',marginLeft:10,color:'#000000'}}>Shop by Brand</Text>
         <View style={{height:50,marginRight:10}}>
            <FlatList nestedScrollEnable={true}
              horizontal
              showsHorizontalScrollIndicator={false}
            data={companies}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>{
            return(
              <View style={styles.companies}>
              <TouchableOpacity >
              <View >
                 <Text style={{color:'#000000',fontWeight:'600'}}>{item.name}</Text>
              </View>
              </TouchableOpacity>
              </View>
              )
          }}
            />
         </View>
      </View>
      <View style={{margin:20}}>
        <FlatList nestedScrollEnable={true} 
        data={mobiles}
        numColumns={2}
         keyExtractor={(item)=>'#'+ item.id}
         renderItem={({item})=> <ItemView items={item}/>}
         />
      </View>
      </ScrollView>
    </View>
    
  )
}
const styles=StyleSheet.create({
   search:{
    flexDirection:'row',
     height:50,
     width:370,
     borderWidth:1,
     margin:10,
     borderRadius:5,
     backgroundColor:'#cc9999'
   },
   textinput:{
    fontSize:18
   },
   searchbycompany:{
    height:80,
    width:'100%',
    marginLeft:10,
    backgroundColor:'#f5f5f5'
   },
   companies:{
    marginTop:5,
    marginRight:5,
    width:90,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    backgroundColor:'#D4D4D4',
    borderRadius:7
   }
})
export default ItemList;