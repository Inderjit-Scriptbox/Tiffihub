import { View, Text ,Image ,StyleSheet } from 'react-native'
import React from 'react'

import color from '../config/Colors'
import AppText from '../component/AppText/AppText'
import ListItem from '../component/ListItem/ListItem'

function ListingDetailsScreen() {
  return (
    <View>
        <Image source={require('../assets/jacket.jpg')} style = {styles.Image}/>
        <View style={styles.detailContainer}>
            <AppText style={styles.Text}>Red Jacket</AppText>
            <AppText style ={styles.price}>$100</AppText>
        </View>
        <ListItem
            image = {require('../assets/inder.jpg')}
            title = "Inderjit Singh"
            subTitle = "5 Listing"
        />
    </View>
  )
}
export default ListingDetailsScreen;
const styles = StyleSheet.create({
    Card:{
        borderRadius:30,
        backgroundColor: color.white,
        marginBottom:20,
        width:"100%",
        overflow: "hidden",
 
    },
    price:{
        color: color.secondary,
        fontWeight:"bold",
        fontSize:20
    },
    detailContainer: {padding:20},
    Image: {
        width:"100%",
        height:200,
        
    },
    Text:{
        fontSize: 24,
        fontWeight:"500",
        marginBottom:7,
    }
})