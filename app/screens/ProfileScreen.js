    import React from 'react';
    import {RefreshControl,View, StyleSheet,ScrollView,TouchableOpacity,Alert} from 'react-native';
    import AppText from '../component/AppText/AppText'
    import Colors from '../config/Colors';
    import { FontAwesome } from '@expo/vector-icons';
    import { useState,useEffect,useContext } from 'react';

    import { MaterialCommunityIcons } from '@expo/vector-icons';
    import { MaterialIcons } from '@expo/vector-icons';
    import {DATA} from '../screens/HomeScreen'
    // import { MaterialCommunityIcons } from '@expo/vector-icons';
    import AsyncStorage from '@react-native-async-storage/async-storage';
    


    const ProfileScreen = ({navigation}) => {



        const contextData = useContext(DATA);
    const [Data,setData] = useState();
    const [load,setLoad] = useState(false);
    const [refreshing, setRefreshing] = React.useState(false);



    const getApiData = async () => 
    {
        var axios = require('axios');
        var data = JSON.stringify({
            
            "id": contextData.id
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
                console.log("Profile:",object);
                setData(object);
                setLoad(true);
                setRefreshing(false);
        })
        .catch(function (error) {
            console.log("Profile:",error);
        });
    }


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getApiData();
      }, []);


    // const resetData = async () => {
    //     try {
        
    //         AsyncStorage.removeItem("id");
    //         console.log('====================================');
    //         console.log("Logout: id deleted successfully");
    //         console.log('====================================');   
            

    
        
    //     } catch (e) {
    //     // saving error
    //     }
    // }
    

    useEffect(()=>{getApiData();},[]); 


        return (
            !load?
            (<View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
                <AppText style={{fontSize:28,fontWeight:"bold",color: Colors.primary,textAlign:"center"}}>Loading...</AppText>
            </View>):
            (<ScrollView style={styles.container}
                refreshControl=
                {
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                
                <AppText style={{fontSize:28,fontWeight:"bold",color: Colors.primary,marginBottom:20,textAlign:"center"}}>Profile</AppText>
                
                <FontAwesome name="user-circle" size={120} color={Colors.medium} style={{alignSelf: "center"}}/>           
                <View style={styles.info}>
                    {Data["data"][0]["First_Name"] && <AppText style={styles.name}>{Data["data"][0]["First_Name"]+" "+Data["data"][0]["Last_Name"]}</AppText>}

                    <AppText style={styles.email}>{Data["data"][0]["Email"]}</AppText>

                    {Data["data"][0]["Phone"] && <AppText style={styles.phone}>{"Contact: "+Data["data"][0]["Phone"]}</AppText>}
                </View>


                <View style={styles.logout}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("NotificationScreen")}}>
                        <View style={styles.log}>
                            <AppText style = {styles.textStyle}>
                                {"Notifications"}
                            </AppText> 
                            <MaterialCommunityIcons name="bell-badge-outline" size={32} color={Colors.primary} style={{padding:10}} />   
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        Alert.alert(
                                "Logout",
                                "Are you sure you want to log out!!",
                                [
                                    {
                                    text: "Cancel",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                    },
                                    { text: "Logout", onPress: () =>{
                                        // resetData();
                                        navigation.navigate("LoginScreen");
                                    }}
                                ]
                                );
                    }}>
                        <View style={styles.log}>
                            <AppText style = {styles.textStyle}>
                                {"Logout"}
                            </AppText> 
                            <MaterialCommunityIcons name="logout" size={32} color={Colors.primary} style={{padding:10}} />   
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={{margin:10,marginTop:20}}>
                    <TouchableOpacity onPress={()=>navigation.navigate("EditProfile",Data)}>
                        <View style={styles.btnContainer}>
                        <AppText style = {styles.textStyle}>
                            {"Edit Profile"}
                        </AppText> 
                        <MaterialIcons name="navigate-next" size={30} color={Colors.primary} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> navigation.navigate("ResetPasswordProfile",Data)} >
                        <View style={styles.btnContainer}>
                        <AppText style = {styles.textStyle}>
                            {"Reset Password"}
                        </AppText> 
                        <MaterialIcons name="navigate-next" size={30} color={Colors.primary} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <View style={styles.btnContainer}>
                        <AppText style = {styles.textStyle}>
                            {"Your Orders"}
                        </AppText> 
                        <MaterialIcons name="navigate-next" size={30} color={Colors.primary} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <View style={styles.btnContainer}>
                        <AppText style = {styles.textStyle}>
                            {"Your Plan"}
                        </AppText> 
                        <MaterialIcons name="navigate-next" size={30} color={Colors.primary}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <View style={styles.btnContainer}>
                        <AppText style = {styles.textStyle}>
                            {"Track Orders"}
                        </AppText> 
                        <MaterialIcons name="navigate-next" size={30} color={Colors.primary} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <View style={styles.btnContainer}>
                        <AppText style = {styles.textStyle}>
                            {"Refferals & Rewards"}
                        </AppText> 
                        <MaterialIcons name="navigate-next" size={30} color={Colors.primary} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <View style={styles.btnContainer}>
                        <AppText style = {styles.textStyle}>
                            {"Saved Addresses"}
                        </AppText> 
                        <MaterialIcons name="navigate-next" size={30} color={Colors.primary} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <View style={styles.btnContainer}>
                        <AppText style = {styles.textStyle}>
                            {"Saved Cards"}
                        </AppText> 
                        <MaterialIcons name="navigate-next" size={30} color={Colors.primary} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{navigation.navigate("FaqScreen")}}>
                        <View style={styles.btnContainer}>
                        <AppText style = {styles.textStyle}>
                            {"Frequently Asked Questions (FAQs)"}
                        </AppText> 
                        <MaterialIcons name="navigate-next" size={30} color={Colors.primary} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <View style={styles.btnContainer}>
                        <AppText style = {styles.textStyle}>
                            {"About Us"}
                        </AppText> 
                        <MaterialIcons name="navigate-next" size={30} color={Colors.primary} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <View style={styles.btnContainer}>
                        <AppText style = {styles.textStyle}>
                            {"Contact Us"}
                        </AppText> 
                        <MaterialIcons name="navigate-next" size={30} color={Colors.primary} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <View style={styles.btnContainer}>
                        <AppText style = {styles.textStyle}>
                            {"Terms and Conditions"}
                        </AppText> 
                        <MaterialIcons name="navigate-next" size={30} color={Colors.primary} />
                        </View>
                    </TouchableOpacity>

                <View style={{margin:30}}>
                <AppText style={{fontSize:14,fontWeight:"bold",textAlign:"center"}}>VERSION 1.0.0</AppText>
                </View>

                </View>

                
            </ScrollView>)
        );
    }

    const styles = StyleSheet.create({
        container:{
            flex:1,
            paddingTop:20 ,
                
        },
        textStyle:{
            fontSize:16,
            fontWeight:"600",
            flex:1
        },
        btnContainer:{
            margin:5,
            flex:1,
            flexDirection:"row",
            backgroundColor:Colors.white,
            alignItems: 'center',
            borderRadius:10,
            borderWidth:1,
            padding:10,
            borderColor:Colors.primary
        },
        email: {
            fontSize:18,
            marginBottom:5,
            textAlign:"center",
            textDecorationLine:"underline"
        },
        name:{
            fontSize:24,
            fontWeight:"bold",
            marginBottom:5,
            textAlign:"center"
        },
        phone:{
            fontSize:18,
            marginBottom:5,
            textAlign:"center"
        },
        info:{
            margin:10
        },
        logout:{
            flexDirection: "row",
            margin:10,
            flex:1,
            justifyContent: 'center',
            
        },
        log:{margin:10,
            // flexDirection:"row",
            backgroundColor:Colors.white,
            alignItems: 'center',
            borderRadius:10,
            flex: 1,
            borderWidth:1,
            width:150,
            padding:10,
            borderColor:Colors.primary}
    })

    export default ProfileScreen;
