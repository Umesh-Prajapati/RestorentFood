import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import useResult from '../hooks/useResult';

const ResultsShow = ({ route, navigation }) => {

  const [ImageArr, setImageArr] = useState([]);
  const { id } = route.params;

  useEffect(() => {
    imageShow(idd);
  }, [])

  const idd = id;
  // console.log(idd);

  async function imageShow(search) {
    try {
      const res = await fetch(`https://foodbukka.herokuapp.com/api/v1/menu?_id=${search}`)
      const data = await res.json();
      console.log(JSON.stringify(data.Result[0].images))
      setImageArr(data.Result[0].images)

    } catch (e) {
      alert("Something it's Wrong..with Image Search");
    }
  }
  console.log("calling image--" + ImageArr.images)
  return (
    <View>
      <FlatList
        data={ImageArr}
        // keyExtractor={(key)=>ResultsShow._id}
        renderItem={(item, index) => {
          return (<View>
            <Image source={{ uri: item.item }} style={{ height: 400, width: 400 }} />
          </View>)
        }}
      />

    </View>
  )
}

export default ResultsShow

const styles = StyleSheet.create({})