import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ResultDetailes = ({ data }) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:data.image}}>
        </Image>
        <Text style={styles.name}>{data.businessname}</Text>
        <Text style={styles.moreinfo}>{data.reviews} Reviews.</Text>
    </View>
  )
}

export default ResultDetailes;

const styles = StyleSheet.create({
    container:{
        width:250,
        marginLeft:15,
        marginBottom:12,
    },
    name:{
        color:'white',
        fontWeight:'800',
        marginVertical:4,
        fontSize:16,
    },
    moreinfo:{
        color:'white',

    },
    image:{
        width : 250,
        height : 160,
        backgroundColor:'yellow',
        borderRadius:6,
        // marginLeft:15,

    }
})