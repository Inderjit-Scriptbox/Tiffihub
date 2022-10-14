import { View, StyleSheet,FlatList} from 'react-native'
import React from 'react'


import Screen from '../component/Screen/Screen'
import ListItem from '../component/ListItem/ListItem'
import Icon from '../component/Icon/Icon'
import ListItemSeperator from '../component/ListItemSeperator/ListItemSeperator'


import colors from "../config/Colors"


const menuItems = [
    {
        title:"My Listing",
        icon:{
            name:"format-list-bulleted",
            backgroundColor: colors.primary

        }
    },
    {
        title:"My Messages",
        icon:{
            name:"email",
            backgroundColor: colors.secondary

        }
    }
]

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
        <View style={styles.container}>
            <ListItem title="Inderjit Singh Babbar"
            subTitle="inderjit.singh18112000@gmail.com"
            image = {require("./../assets/inder.jpg")}
            />
        </View>
        <View style={styles.container}>
            <FlatList
            data = {menuItems}
            keyExtractor = {menuItems=> menuItems.title}
            ItemSeparatorComponent = {ListItemSeperator}
            renderItem = {({item})=>
            <ListItem title = {item.title}
            ImageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} size={50}/>}

            />}
            />
        </View>
        <ListItem
            title="Log Out"
            ImageComponent = {<Icon 
            name = "logout"
            backgroundColor = "#ffe66d"
            size={50}
            />}
        />
    </Screen>
  )
}

const styles = StyleSheet.create(
    {
        screen:{
            backgroundColor:colors.light
        },
        container:{
        marginVertical:20
    }
})