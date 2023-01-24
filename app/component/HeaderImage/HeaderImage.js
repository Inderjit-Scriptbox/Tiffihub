import React,{useState,useEffect} from 'react';
import {View, StyleSheet,Image,Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const HeaderImage = ({id}) => {
    return (
        <Image source={require("../../assets/logo/SplashText.png")} style={[styles.image]} resizeMode='contain'/>
    );
}

const styles = StyleSheet.create({
    image:{
    height: '90%',
    position: "absolute",
    alignSelf:"center"
    
    }
})

export default HeaderImage;
