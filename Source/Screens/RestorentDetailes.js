import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useResult from '../hooks/useResult';

const RestorentDetailes = ({ route, navigaiton}) => {

    const { data } = route.params;

  return (
    <View style={{flex:1, justifyContent:'space-evenly', margin:30, marginVertical:20}}>
      <Text>Name : {data.businessname}</Text>
      <Text>Reviews : {data.reviews}</Text>
      <Text>Phone : {data.phone}</Text>
      <Text>Email : {data.email}</Text>
      <Text>Type : {data.restauranttype}</Text>
      <Text>Slug : {data.slug}</Text>
      <Text>Cost : {data.averagecost}</Text>
      <Text>Addresh : {data.address}</Text>
      <Text>Location : {data.location}</Text>
    </View>
  )
}

export default RestorentDetailes

const styles = StyleSheet.create({})