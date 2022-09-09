import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultDetailes from './ResultDetailes';

const ResultList = ({ restorent, navigation}) => {

  if(!restorent.length){
    return null;
  }

  return (
    <View>
        <Text style={styles.text}>{restorent.length>0 ? restorent[0].restauranttype : null}</Text>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restorent}
        keyExtractore={(e)=>{restorent._id}}
        renderItem={({item, index})=>{
            return  <TouchableOpacity onPress={()=>navigation.navigate('Restorent Detailes', { data : restorent[index] })}>
                        <ResultDetailes  data={item}/>
                    </TouchableOpacity>
        }}
        />
    </View>
  )
}

export default ResultList

const styles = StyleSheet.create({
    text:{
        marginLeft:15,
        marginBottom:3,
        color:'white',
        fontWeight:'800',
        fontSize:18,
    }

})