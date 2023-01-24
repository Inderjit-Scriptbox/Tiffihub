import React,{useState,Component,useEffect} from 'react';
import {View, StyleSheet,ScrollView,TextInput,TouchableOpacity,ActivityIndicator} from 'react-native';
import AppText from '../../component/AppText/AppText';
import Colors from '../../config/Colors'
import { useRoute } from '@react-navigation/native'
import {CountryPicker} from "react-native-country-codes-picker";
import { FontAwesome } from '@expo/vector-icons';
import AppButton from '../../component/AppButton/AppButton';
import { Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



const EditProfile = () => {

    const route = useRoute();
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState("+1");

    
  
    const [isVerify,setVerify] = useState(route.params.data[0]["Email_Verified"]);

    const [fname, setFname] = useState(route.params.data[0]["First_Name"]);
    const [lname, setLname] = useState(route.params.data[0]["Last_Name"]);
    const [phone, setPhone] = useState(route.params.data[0]["Phone"]);
    const [loader,setLoader] = useState(false);

    

    const handleFname = (text) => {
        console.log(text);
        setFname(text);
    }

    const handleLname = (text) => {
        setLname(text);
    }

    const handlePhone = (text) => {
        setPhone(text);
    }

    const updateData = async (fname, lname, phone,callback) => 
    {
        var axios = require('axios');
        console.log(fname)
        var data = JSON.stringify({
        "email": route.params.data[0]["Email"],
        "first_name": fname,
        "last_name": lname,
        "Phone": phone
        });
        console.log("DATA:",data);
        var config = {
        method: 'post',
        url: 'https://tifinapi.tiffinhub.ca/tiffin_api/set_profile',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        await axios(config)
        .then(function (response) {
        // console.log("F: ",response);
        getData();
        callback(response);
        
        })
        .catch(function (error) {
        console.log(error);
        });



    }

    const verifyEmail = async (callback) => {
        var axios = require('axios');

        var config = {
          method: 'get',
          url: 'https://tifinapi.tiffinhub.ca/tiffin_api/verify_email/'+route.params.data[0]["id"],
          headers: { }
        };
        
        await axios(config)
        .then(function (response) {
          console.log("SignUpFuction",JSON.stringify(response.data));
          callback(JSON.parse(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    const getData = async () =>{
        var axios = require('axios');
        var data = JSON.stringify({
            
            "id": route.params.data[0].id
        });
        
        var config = {
            method: 'post',
            url: 'https://tifinapi.tiffinhub.ca/tiffin_api/get_user_data_by_id',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };
        
        await axios(config)
        .then(function (response) 
        { 
                const object = JSON.parse(response.data);
                console.log(object);
                setFname(object.data[0].First_Name);
                setLname(object.data[0].Last_Name);
                setPhone(object.data[0].Phone);
               
                
        })
        .catch(function (error) {
            console.log("Profile:",error);
        });
    }


    useEffect(()=>{
        getData();
    },[])


    

    return (
        <ScrollView style={[styles.container]}>
            
                <ActivityIndicator size="large" style={{position: 'absolute'}}/>
            
            <View style={{flex:1,backgroundColor:Colors.primary,alignItems: "center",padding:10}}>
                <AppText style={{fontSize:16,color: Colors.secondary,fontWeight:"bold"}}>{"Email ID"}</AppText> 
                <AppText style={{color:Colors.white,fontWeight:"bold"}}>{route.params.data[0]["Email"]}</AppText>       
            </View> 

            <View style={{borderWidth:2,borderColor:Colors.primary,padding:5,margin:10,marginTop:40,borderRadius:10}}>
                <AppText style={{color:Colors.secondary,fontWeight:"bold",fontSize:22,alignSelf: "center",padding:10}}>Edit Personal Information</AppText>
                <View style={styles.subcontainer}>
                    <AppText style={{padding:10,color: Colors.secondary,fontWeight:"bold"}}>{"First Name"}</AppText>        
                    <TextInput placeholder="Enter your first name..." value={fname}  onChangeText={handleFname} style={styles.text}/>            
                </View>

                <View style={styles.subcontainer}>
                    <AppText style={{padding:10,color: Colors.secondary,fontWeight:"bold"}}>{"Last Name"}</AppText>        
                    <TextInput placeholder="Enter your last name..." value={lname} onChangeText={handleLname} style={styles.text}/>            
                </View>

                <View style={styles.subcontainer}>
                    <AppText style={{padding:10,color: Colors.secondary,fontWeight:"bold"}}>{"Phone No."}</AppText>        
                    <TouchableOpacity
                        onPress={() => setShow(true)}
                        style={{    
                            backgroundColor: Colors.white,
                            padding:5,
                            borderRadius:5,
                            margin:5,
                            borderWidth:2,borderColor:Colors.primary,
                        }}>
                        <AppText style={{
                            // color:Colors.primary,
                            fontWeight:"bold",
                            fontSize: 16
                        }}>
                            {countryCode}
                        </AppText>
                    </TouchableOpacity>
                    <TextInput placeholder="Enter phone number ..." value={phone} onChangeText={handlePhone} keyboardType="phone-pad" style={styles.text}/>            
                </View>
               
                <AppButton title="Update Details" onPress={() => {
                     
                    updateData(fname,lname,phone,function(response)
                    {
                        console.log("A:",JSON.parse(response.data));


                    });
                    }} 
                    style={{margin:10,width:"60%",alignSelf: 'center'}} textstyle={{fontSize:18}}/>
                </View>                    
            <CountryPicker
                show={show}
                
                pickerButtonOnPress={(item) => {
                setCountryCode(item.dial_code);
                setShow(false);
                }}
                />   
            <View style={{flexDirection:"row",margin:20,alignItems: "center"}}>
                <AppText style={{color:Colors.primary,fontWeight:"bold",fontSize:22,flex:1,textDecorationLine:"underline"}}>{"Email Verification"}</AppText> 
                {(isVerify.toUpperCase()==="YES")
                ?
                (<MaterialIcons name="verified-user" size={26} color={Colors.secondary} />):
                (<TouchableOpacity onPress={()=>verifyEmail(function (response){
                  console.log(response);
                    if(response["code"]==1)
                    {
                        Alert.alert("Congratulation!!",response["message"],[{ text: "OK", onPress: () => {setLoader(false); }}]);

                    }
                    else
                    {
                      Alert.alert("Error!!!",response["message"],[{ text: "OK", onPress: () => {setLoader(false); }}]);

                    }
                   
                })}>
                    <View style={{backgroundColor:Colors.secondary,paddingHorizontal:10,padding:5,borderRadius:10}}>
                        <AppText style={{color:Colors.white,fontWeight:"bold",fontSize:18,alignSelf: 'center'}}>{"VERIFY"}</AppText>
                    </View>
                </TouchableOpacity>)}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
    flex:1,
        
    },
    subcontainer: {
        flexDirection: 'row',
        margin:10,
        marginVertical:10,
        alignItems: 'center',


    },
    password: {
        marginVertical:10,
        flex: 1,
    },
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

export default EditProfile;
