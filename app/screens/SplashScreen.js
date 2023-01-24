import React from 'react';
import {View, StyleSheet,Image} from 'react-native';
import AppText from '../component/AppText/AppText'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
        <Image source={require("../assets/logo/logo_color.png")} style={styles.logo}/>
        <Image source={require("../assets/gif/loader.gif")} style={styles.loader}/>
        <AppText style={styles.text}>{"We're Fresher\nHealthier & Tastier"}</AppText>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{flex:1,
    alignItems: 'center',
justifyContent: 'center',},
    logo:{
        width:300,
        height:100,    
    },
    text:{
        fontSize:20,
        textAlign: "center",
        fontWeight: "bold",
    },
    loader:{
        height:100,
        width:100,
        marginTop:"45%",
        marginBottom:"20%"
    }
})

export default SplashScreen;
