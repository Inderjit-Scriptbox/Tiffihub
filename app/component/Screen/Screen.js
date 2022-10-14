import React from 'react';
import {View,SafeAreaView, StyleSheet, StatusBar,Platform} from 'react-native';


function Screen({children,style})
{
    return (
        <SafeAreaView style={[styles,style]}>
        {/* <View style = {style}> */}
        {children}
        {/* </View> */}
        </SafeAreaView>
    );
}

export default Screen;

const styles = StyleSheet.create({
    paddingTop:Platform==="android"?StatusBar.currentHeight:0,
    flex: 1
})