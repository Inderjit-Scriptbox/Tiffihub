import React from 'react';
import { View,Image ,StyleSheet ,Platform,StatusBar} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/Colors';

function ViewImageScreen()
{
    return (
        <View style={styles.container}>
            <View style={styles.backButton}>
                <MaterialCommunityIcons name="close" color="white" size={30}></MaterialCommunityIcons>
            </View>
            <View style={styles.delButton}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={30}></MaterialCommunityIcons>
            </View>
              
            <Image 
                style={styles.Image} 
                resizeMode="contain" 
                source = {require('../assets/chair.jpg')}>
            </Image>
        </View>);
}


export default ViewImageScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    Image:{
        width:'100%',
        height:'100%',
        
    },
    backButton:{
        top:StatusBar.currentHeight,
        left:20,
        position:"absolute",
   },
    delButton:{
        top:StatusBar.currentHeight,
        right:20,
        position:"absolute",
    }
});