import React from 'react';
import {View,Text, StyleSheet,StatusBar} from 'react-native';

const PlansScreen = () => {
    return (
        <View style={styles.container}>
            <Text>HeaderShown</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop:StatusBar.currentHeight,
        
    }
})

export default PlansScreen;
