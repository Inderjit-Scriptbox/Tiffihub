import React,{useState,Component,useEffect} from 'react';
import {View, StyleSheet,ScrollView,TextInput,TouchableOpacity,ActivityIndicator} from 'react-native';
import AppText from '../../component/AppText/AppText';
import Colors from '../../config/Colors'
import { useRoute } from '@react-navigation/native'
import {CountryPicker} from "react-native-country-codes-picker";
import { FontAwesome } from '@expo/vector-icons';
import AppButton from '../../component/AppButton/AppButton';
import { Alert } from 'react-native';


const ResetPasswordProfile = () => {

    const route = useRoute();

    const [closeEye,setCloseEye] = useState(true);
    const [current,setCurrent] = useState();
    const [reset,setReset] = useState();
    const [loader,setLoader] = useState(false);

    const handleCurrent = (text) => {
        console.log(text);
        setCurrent(text);
    }

    const handleReset = (text) => {
        console.log(text);
        setReset(text);
    }

    const resetPass = async (current,reset,callback) => 
    {
        var axios = require('axios');
        var data = JSON.stringify({
        "id": route.params.data[0]["id"],
        "current_pass": current,
        "new_pass": reset
        });

        var config = {
        method: 'post',
        url: 'https://tifinapi.tiffinhub.ca/tiffin_api/reset_password',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        await axios(config)
        .then(function (response) 
        {
            console.log(JSON.stringify(response.data));            
            callback(JSON.parse(response.data));
            setLoader(true);
        })
        .catch(function (error) {
        console.log(error);
        });

    }

    return (
        <View style={{flex: 1}}>
            <AppText style={{padding:10,color: Colors.primary,fontWeight:"bold",fontSize:20,marginTop:20}}>{"Current Password"}</AppText>        
                <View style={{flexDirection:"row",margin:5,alignItems: "center"}}>
                    <TextInput  style={[styles.text,{width:"70%",borderWidth:2,borderColor:Colors.secondary}]} secureTextEntry={closeEye}  value={current} onChangeText={handleCurrent}/>   
                    {
                        closeEye ?
                            <TouchableOpacity style={{padding:5}} onPress={()=>setCloseEye(!closeEye)}>
                                <FontAwesome name="eye-slash" size={20} color={Colors.secondary}/>
                            </TouchableOpacity> 
                            :
                            <TouchableOpacity style={{padding:5}} onPress={()=>setCloseEye(!closeEye)}>
                                <FontAwesome name="eye" size={20} color={Colors.secondary} />
                            </TouchableOpacity>
                    }  
                        
                </View>                
            <AppText style={{padding:10,color: Colors.primary,fontWeight:"bold",fontSize:20}}>{"Reset Password"}</AppText>        
                <View style={{flexDirection:"row",margin:5,alignItems: "center"}}>
                    <TextInput  style={[styles.text,{width:"70%",borderWidth:2,borderColor:Colors.secondary}]} secureTextEntry={closeEye} value={reset} onChangeText={handleReset}/>   
                    {
                        closeEye ?
                            <TouchableOpacity style={{padding:5}} onPress={()=>setCloseEye(!closeEye)}>
                                <FontAwesome name="eye-slash" size={20} color={Colors.secondary}/>
                            </TouchableOpacity> 
                            :
                            <TouchableOpacity style={{padding:5}} onPress={()=>setCloseEye(!closeEye)}>
                                <FontAwesome name="eye" size={20} color={Colors.secondary} />
                            </TouchableOpacity>
                    }                             
                </View>
            <AppButton title="Reset" onPress={()=>resetPass(current,reset,function (response){
                  console.log(response);
                    if(response["code"]==1)
                    {
                        Alert.alert("Congratulation!!",response["message"],[{ text: "OK", onPress: () => {setLoader(false); }}]);

                    }
                    else
                    {
                      Alert.alert("Error!!!",response["message"],[{ text: "OK", onPress: () => {setLoader(false); }}]);

                    }
                   
                })} style={{margin:30,width:"50%",alignSelf: 'center',borderColor:Colors.secondary,backgroundColor:Colors.primary,borderWidth:2}} textstyle={{fontSize:20,color:Colors.white}}/>
            {loader && 
            <View style={{flex:1,alignItems: "center",marginTop:100}}>
                <AppText style={{fontSize:30,color:Colors.secondary,fontWeight:"bold",padding:20}}>{"Processing..."}</AppText>

                <ActivityIndicator size="large" style={{justifyContentSelf: 'center',alignSelf: 'center'}} color={Colors.primary}/>
            </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        
        backgroundColor:Colors.white,
        fontSize:16,
        borderWidth:2,
        borderColor: Colors.primary,
        alignSelf: 'center',
        height:38,
        fontWeight:"600",
        paddingHorizontal:10,
        borderRadius:10,
        flex:1}
})

export default ResetPasswordProfile;
