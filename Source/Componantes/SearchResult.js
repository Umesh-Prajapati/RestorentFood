import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native'
import React from 'react'


const SearchApi = ({menu, navigation}) => {
  return (
    <View>
        <FlatList
        showsHorizontalScrollIndicator={false}
        data={menu}
        keyExtractore={(e)=>{menu._id}}
        renderItem={({item})=>{
            return  <TouchableOpacity style={styles.FlatList}
                     onPress={()=>navigation.navigate('Images',{ id : item._id })}>
                        <Image source={{uri:item.images[1]}} style={{ height:100, borderRadius:15,}} />
                        <Text style={styles.text}>Name : {item.menuname} </Text>
                        <Text style={styles.text2}>Discription : {item.description} </Text>
                    </TouchableOpacity>
        }}
        />
    </View>
  )
}

export default SearchApi

const styles = StyleSheet.create({
    text:{
        marginTop:10,
        color:'white',
        fontWeight:'600',
        fontSize:15,
    },
    text2:{
        color:'white',
        fontSize:12,
    },
    FlatList:{
        backgroundColor:'grey',
        marginBottom:15,
        marginHorizontal:15,
        borderRadius:15,
        padding:12,
    }
})