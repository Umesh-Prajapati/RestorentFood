import React, { useEffect, useState } from "react";
import { Alert, Button, FlatList, Image, ScrollView, StyleSheet, Text, TextComponent, View } from "react-native";
import ResultList from "../Componantes/ResultList";
import SearchApi from "../Componantes/SearchResult";
import Search_Cmp from "../Componantes/Search_Cmp";
import useResult from "../hooks/useResult";

export default function Search_Src({navigation}){

   const [term, setTerm] = useState('');

   const [ arr, searchArr, searchAPI, emptyArr ] = useResult();

    const FilterResultByReview = (type) => {
        return arr.filter( r => {
            return r.restauranttype === type;
        });
    };

    useEffect(()=>{
     if(!term>0){
        emptyArr();
     }   
    },[term])
    

    return(
            <View style={{flex:1, backgroundColor:'#2C3333'}}> 
                <Search_Cmp 
                value={term}
                onTermChange={ (e)=>{setTerm(e);
                }}
                onTermSubmit={()=>{term.length>0?searchAPI(term):null;}}
                />

                { searchArr.length > 0
                ? <Text style={style.text}>We Have Found {searchArr.length} Records. </Text>
                : <Text style={style.text}>We Have Found {arr.length} Records. </Text>
                }
                
                { searchArr.length > 0 
                ? <SearchApi
                    navigation={navigation}
                    menu={searchArr}
                />
                :<ScrollView showsVerticalScrollIndicator={false} style={{flex:1,}}>
                    <ResultList 
                        navigation={navigation}
                        restorent={FilterResultByReview('eatery')}
                        />
                    <ResultList 
                        navigation={navigation}
                        restorent={FilterResultByReview('canteen')}
                        />
                    <ResultList 
                        navigation={navigation}
                        restorent={FilterResultByReview('bukka')}
                    />
                </ScrollView>
                }
           
            </View>
    );

}

const style= StyleSheet.create({
    flatemain:{
        flex:1,
        flexDirection:"row",
        marginVertical:10,
        borderRadius:10,
        backgroundColor:'#395B64',
        padding:10, margin:5,
    },
    flateIcon:{
        width: 100, height: 100,
        borderRadius:100,
        borderWidth:4,
        borderColor:'white',
        alignSelf:"center"
    },
    text:{
        marginBottom:8,
        fontSize:12,
        color:'#F5F2E7',
        marginLeft:15,
    }

})




// <FlatList 
// style={{marginVertical:15, flex:1}}
// data={arr}
// renderItem={({item})=>(
//     <View 
//         style={style.flatemain}>
//         <Image
//             source={{uri:`${item.images[1]}`}}
//             style={style.flateIcon}
//         />
//         <View style={{flex:1, marginStart:13}}>
//             <Text style={style.text}>Name : {item.menuname}</Text>
//             <Text style={style.text}>Description : {item.description}</Text>
//         </View>
//     </View>)
// }
// />