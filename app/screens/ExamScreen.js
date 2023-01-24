import React from 'react';
import {View,Text, StyleSheet,StatusBar,TouchableOpacity,SafeAreaView} from 'react-native';
import Colors from '../config/Colors';
import { Foundation } from '@expo/vector-icons';
import AppText from '../component/AppText/AppText';
import { FontAwesome5,Ionicons } from '@expo/vector-icons';

const Services = ({navigation}) => {
    return (

        <SafeAreaView style={styles.container}>
            {/* <TouchableOpacity style={{marginHorizontal:30,alignSelf:"flex-end",marginTop:10}}
                        onPress={() =>navigation.navigate("HomeScreen")}>
                        <Ionicons name="ios-arrow-back-outline" size={32} color="black" />
                    </TouchableOpacity> */}
            <AppText style={{fontSize:28,fontWeight:"bold",color: Colors.primary,marginBottom:20}}>{"Exams"}</AppText>
            

            <TouchableOpacity
                style={styles.leftContainer}
                onPress = {()=>navigation.navigate("G1Description")}
                >                
                <FontAwesome5 name="pencil-alt" size={50} color="black" />                
                <AppText style={{color:Colors.primary,marginTop:30,fontSize:20,fontWeight:"bold",textAlign:"center"}}>{"G1 Description"}</AppText>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.rightContainer}
                onPress = {()=>navigation.navigate("ExamPage")}
             >
                <Foundation name="clipboard-pencil" size={50} color="black" />
                <AppText style={{color:Colors.primary,marginTop:30,fontSize:20,fontWeight:"bold",textAlign:"center"}}>{"G1 Examination"}</AppText>
            </TouchableOpacity>
           


            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.white,
        paddingTop:20       
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
    },
    leftContainer:{
        backgroundColor:Colors.white,                
        width:200,
        height:200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding:20,
        margin:"5%",               
        shadowColor: '#000000',
        shadowOffset: {
        width: 10,
        height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 0.5,
        elevation: 10,
    },
    rightContainer:{
        backgroundColor:Colors.white, 
        margin:"5%",
        width:200,
        height:200,
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
        shadowOpacity: 0.5,
        elevation: 10,
    }

})

export default Services;
