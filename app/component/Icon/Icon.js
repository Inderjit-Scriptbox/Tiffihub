import { View, Text } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from "@expo/vector-icons"

export default function Icon(
    {name,
    size=40,
backgroundColor="#000",
iconColor = "#fff"}) {
  return (
    <View
    style={{height:size,
    width:size,
    backgroundColor: backgroundColor,
    borderRadius: size/2,
    justifyContent: 'center',
    alignItems: 'center'}}>
    <MaterialCommunityIcons size={size*0.5} color={iconColor} name={name}/>
    
    </View>
  )
}