import { View, Text, Image,StyleSheet, useWindowDimensions, ImageBackground,Dimensions } from 'react-native'
import React from 'react'

import Colors from "./../../config/Colors"
import AppText from '../AppText/AppText'

import {MaterialCommunityIcons} from "@expo/vector-icons"
import AppButton from '../AppButton/AppButton'
import Screen from '../Screen/Screen'

export default function OnBoardingItem({name,text,subText,id,onPress}) {
  const {width,height} = useWindowDimensions();
  
  return (
    
    <ImageBackground style={styles.promo} imageStyle={{
      resizeMode: "stretch",
      alignSelf: "flex-end"
    }}
   source = {require('./../../assets/promoSlider.png')}>
    <Screen>
    <View style={[styles.container,{width,height,padding:20,paddingHorizontal:40}]}>

      {name && <MaterialCommunityIcons
      name = {name}
      size = {100}
      color = {Colors.primary}
      style= {{alignItems: 'center',justifyContent: 'center',marginBottom:60}}
      ></MaterialCommunityIcons>}
      <AppText style={styles.text}>{text}</AppText>
      <AppText style={styles.subText}>{subText}</AppText>
      {id==6 && <AppButton title="Get Started" style={{backgroundColor:Colors.primary}} onPress={onPress}/>}

    </View>
</Screen>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    text:{
        fontWeight:'800',
        fontSize:32,
        textAlign: 'center',
        marginBottom: 20


    },
    subText:{
      fontSize:16,
      textAlign: 'center',
      marginBottom:10

  },
    promo:{
      flex: 1,
      height: Dimensions.get('window').height,    
      justifyContent:"center",   
      bottom:0
 
    }

})