import { Text,StyleSheet,Platform } from 'react-native';
import React from 'react';
import {useFonts} from 'expo-font'

function AppText({children,style}) {
    

    return (
        <Text style={[styles,style]}>{children}</Text>
    );

}
const styles = StyleSheet.create({
    fontSize:22,
    fontFamily: Platform.OS === "android"?"Roboto":"Avenir"
})


export default AppText;
