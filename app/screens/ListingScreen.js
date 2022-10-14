import { FlatList,StyleSheet} from 'react-native'
import React from 'react'


import Screen from './../component/Screen/Screen'
import Card from '../component/CardComponents/Card'
import color from './../config/Colors'

const listing = [
    {
        id:1,
        title:'Red jacket for sale',
        price:100,
        image: require("./../assets/jacket.jpg")
    }
    ,
    {
        id:2,
        title:'Couch in great condition',
        price:100,
        image: require("./../assets/couch.jpg")
    }
]

export default function ListingScreen() {

    
  return (
    <Screen style={styles.screen}>
    <FlatList
        data = {listing}
        keyExtractor={listing=>listing.id.toString()}
        renderItem = {({item})=>
        <Card
        title={item.title}
        subTitle = {"$"+item.price}
        image = {item.image}
        />}
    />

    </Screen>
  )
}

const styles = StyleSheet.create(
    {
        screen:{
        backgroundColor:color.light,
        padding:10
        }
})