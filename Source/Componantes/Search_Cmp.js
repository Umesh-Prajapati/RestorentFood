import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextInput, TextInputBase, View } from "react-native";

export default function Search_Cmp( { value, onTermChange, onTermSubmit }){

    return(
        <View style={style.main}>
            <Feather style={style.icon} name="search" size={30}/>
            <TextInput style={style.inputeText}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search"
            value={value}
            onChangeText = { onTermChange }
            onEndEditing = { onTermSubmit }
            />
        </View>
    )
}

const style = StyleSheet.create({
    main:{
        flexDirection:"row",
        marginHorizontal:15,
        marginVertical:6,
        borderRadius:10,
        backgroundColor:'#D0DDDD',
        height:50,
    },
    inputeText:{
        flex:1,
        fontSize:18,
    },
    icon:{
        marginHorizontal:15,
        alignSelf:"center",
    },
})