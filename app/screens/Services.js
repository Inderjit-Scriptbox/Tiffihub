import React from 'react';
import {View,Text, StyleSheet,StatusBar,TouchableOpacity} from 'react-native';
import Colors from '../config/Colors';
import AppButton from '../component/AppButton/AppButton'
import { Foundation } from '@expo/vector-icons';
import AppText from '../component/AppText/AppText';
import { FontAwesome5 } from '@expo/vector-icons';

const Services = ({navigation}) => {
    return (
        <View style={styles.container}>
            <AppText style={{fontSize:24,fontWeight:"bold",color: Colors.primary}}>Services</AppText>
            <View style={{flexDirection:'row'}}>

            <TouchableOpacity
                style={{
                backgroundColor:Colors.white,                
                width:"35%",
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                padding:30,
                margin:"5%",               
                shadowColor: '#000000',
                shadowOffset: {
                width: 10,
                height: 5
                },
                shadowRadius: 10,
                shadowOpacity: 2,
                elevation: 15,
                }}
                onPress = {()=>navigation.navigate("ExamPage")}
             >
                <Foundation name="clipboard-pencil" size={32} color="black" />
                <AppText style={{color:Colors.primary,marginTop:5,fontSize:18,fontWeight:"bold"}}>
                {"Exams"}
                </AppText>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                backgroundColor:Colors.white, 
                margin:"5%",
                width:"35%",
                padding:20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                padding: 10,
                shadowColor: '#000000',
                shadowOffset: {
                width: 10,
                height: 5
                },
                shadowRadius: 10,
                shadowOpacity: 2,
                elevation: 15,
                }}
             >
                <FontAwesome5 name="gifts" size={32} color="black" />
                <AppText style={{color:Colors.primary,marginTop:5,fontSize:18,fontWeight:"bold"}}>
                {"Gift Cards"}
                </AppText>
            </TouchableOpacity>
            </View>


            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop:StatusBar.currentHeight+20,
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.white        
    },
    countbtn:{
        width:"12%",
        margin:"1.3%",
        padding:10
         
    },
    btncontainer:{
        flexDirection: "row"
    },
    navigation:{
        flexDirection: "row",
    },
    navButton:{
        height:100,
        width:100
    }
})

export default Services;
