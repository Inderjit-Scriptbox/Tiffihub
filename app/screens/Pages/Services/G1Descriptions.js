import React,{useState,useEffect} from 'react';
import {View, StyleSheet,Text,StatusBar,TouchableOpacity,ScrollView,SafeAreaView,Alert} from 'react-native';
import AppButton from '../../../component/AppButton/AppButton';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import Colors from '../../../config/Colors';
import AppText from '../../../component/AppText/AppText'
import { Entypo } from '@expo/vector-icons';
import { Image } from 'react-native';
import { ActivityIndicator } from 'react-native';




const G1Descrimination = ({navigation}) => {
    
    const [myData,setMyData] = useState();
    const [myDescription,setMyDescription] = useState();

    const [index,setIndex] = useState(0); 


    const [language, setLanguage] = useState("english");

    const [header,setHeader] = useState("Description");

    const [isLoaded,setIsLoaded] = useState(true);

  

    //for language selection
    const [description,setDescription] = useState();

    const getDescription = async () => {
            var axios = require('axios');   
            var config = {
                        method: 'get',
                        url: 'https://tifinapi.tiffinhub.ca/tiffin_api/get_descriptions',
                        headers: { }
                    };

            axios(config)
            .then(function (response) 
            {
                const object = response.data;
                const myDescription = JSON.parse(object); 

                setMyDescription(myDescription);
                setIsLoaded(false);
                
                console.log(myDescription["data"][index]["English_Description"]); 
                setDescription(myDescription["data"][index]["English_Description"]);

            })
            .catch(function (error) {
            console.log(error);
            });

    }

    useEffect(()=>{
    getDescription();},[]);     

    const btnHandler = (index) =>
    {
            setIndex(index);
            if(language=="english")
            {
                setDescription(myDescription["data"][index]["English_Description"]);
            }
            else if(language=="hindi")
            {
                setDescription(myDescription["data"][index]["Hindi_Description"]);
            }
            else
            {
                setDescription(myDescription["data"][index]["Punjabi_Description"]);
            }
    }

    const nextHandler = () => {
        if(index!=(myDescription["data"].length-1))
        {
            if(language=="english")
            {
                setDescription(myDescription["data"][index+1]["English_Description"]);
            }
            else if(language=="hindi")
            {
                setDescription(myDescription["data"][index+1]["Hindi_Description"]);
            }
            else
            {
                setDescription(myDescription["data"][index+1]["Punjabi_Description"]);
            }
            setIndex(index+1);
        }
        else
        {
            Alert.alert("Congratulations!!","Your tutorials are successfully completed 🤯...",[{ text: "OK", onPress: () => {console.log("OK Pressed");navigation.navigate("ExamScreen"); }}]);
        }
    }

    const prevHandler = () => {
        if(index!=0)    
        {
            if(language=="english")
            {
                setDescription(myDescription["data"][index-1]["English_Description"]);
            }
            else if(language=="hindi")
            {
                setDescription(myDescription["data"][index-1]["Hindi_Description"]);
            }
            else
            {
                setDescription(myDescription["data"][index-1]["Punjabi_Description"]);
            }
            setIndex(index-1);
        }
    }


    const  subjectHandler = (lan) => 
    {
            if(lan=="english")
            {
                setHeader("Description");
                setDescription(myDescription["data"][index]["English_Description"]);               
            }
            else if(lan=="hindi")
            {                
                setHeader("विवरण");
                setDescription(myDescription["data"][index]["Hindi_Description"]);
            }
            else if(lan=="punjabi")
            {
                setHeader("ਵਰਣਨ");
                setDescription(myDescription["data"][index]["Punjabi_Description"]);
            }   
    }

    return ( 
        (isLoaded)?
        (
            <SafeAreaView style={{flex:1,alignItems: 'center',justifyContent: 'center',backgroundColor:Colors.white}}>
                <AppText style={{fontSize:24,fontWeight:"bold",color:Colors.primary,marginBottom:20}}>Loading...</AppText>
                <Image source={require('../../../assets/gif/loading.gif')}/>
       
            </SafeAreaView>
        )
        :                                                                                          
        (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <AppText style={styles.headers}>G1 Description</AppText>
                
                    <View style={styles.indexContainer}>    
                        <View>
                            <ScrollView style={{height:300,padding:5}} nestedScrollEnabled>
                                <View style = {styles.btncontainer}>
                                    {myDescription["data"].map((item, id) =>
                                    <AppButton key={id} title={id+1} textstyle={{color:index==id?"black":"white"}} style={[styles.countbtn,{backgroundColor:index==id?"#87CEEB":Colors.primary}]} onPress={() => btnHandler(id)}/>)}
                                </View>
                            </ScrollView>
                        </View>                       
                    </View>
                                                              
                    <View style = {{flexDirection:"row",paddingHorizontal:5,marginTop:10,marginHorizontal:"5%",alignSelf: "center"}}>
                        <AppButton style = {{width:"30%",marginHorizontal:"1%",backgroundColor:language=="english"?Colors.primary:Colors.white}} textstyle={{fontSize:14,color:language=="english"?"white":"black"}} title="English" 
                            onPress={()=>{
                                setLanguage("english");
                                subjectHandler("english");
                            }}/>
                        <AppButton style = {{width:"30%",marginHorizontal:"1%",backgroundColor:language=="hindi"?Colors.primary:Colors.white}} textstyle={{fontSize:14,color:language=="hindi"?"white":"black"}} title="Hindi" 
                            onPress={()=>{                                
                                setLanguage("hindi");
                                subjectHandler("hindi");
                            }}/>
                        <AppButton style = {{width:"30%",marginHorizontal:"1%",backgroundColor:language=="punjabi"?Colors.primary:Colors.white}} textstyle={{fontSize:14,color:language=="punjabi"?"white":"black"}} title="Punjabi" 
                            onPress={()=>{                               
                                setLanguage("punjabi");
                                subjectHandler("punjabi");
                            }}/>           
                    </View>
    
                    
                    
                    <View style={styles.questionContainer}>                       
                            <AppText style={{fontWeight:"bold",fontSize:36,textAlign:"center",color:Colors.primary}}>{header}</AppText>
                            <AppText style={{fontWeight:"bold",fontSize:20,padding:10}}>{index+1}.</AppText>

                            {myDescription["data"][index]["Image_URL"]!=null && <Image source={require("../../../assets/test/stop.png")} style={{height:150,width:150,alignSelf:"center",margin:10}}/>}
                            <AppText style={{padding:10,fontWeight:"700"}}>{description}</AppText>
                    </View>
    
    
                    <View style = {{flexDirection:"row",paddingHorizontal:5,marginTop:10,marginHorizontal:"5%",alignSelf: "center"}}>
                        <AppButton style = {{width:"40%",marginHorizontal:"10%",borderRadius:10}}  title="Previous" 
                            onPress={()=>{
                                prevHandler();
                            }}/>
                        <AppButton style = {{width:"40%",marginHorizontal:"10%",borderRadius:10}}  title={(index!=(myDescription["data"].length-1)) ?"next":"submit"} 
                            onPress={()=>{                                
                                nextHandler();
                            }}/>
                                  
                    </View>

                    <View style={{marginBottom:40}}></View>
                
                </ScrollView>
            </SafeAreaView>
        ));
    
    
}

const styles = StyleSheet.create({
    container:{               
               
    },
    countbtn:{
        width:"20%",
        margin:"1.5%",
        padding:10,
        borderRadius:10,
        borderWidth:3,
        borderColor: "red"
        
    },
    btncontainer:{
        flexDirection: "row",
        alignSelf:"center", 
        justifyContent:"center",
        flexWrap:"wrap",       
    },
    primaryContainer:{
        borderRadius:10,                           
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.medium,                                    
        padding:10,
        paddingEnd:20,        
        backgroundColor: Colors.primary,
        shadowColor: '#000000',
        shadowOffset: {
        width: 10,
        height: 10
        },
        shadowRadius: 10,
        shadowOpacity: 0.5,
        elevation: 5,
    },
    whiteContainer:{
        borderRadius:10,                           
        marginVertical:10,
        borderColor: Colors.medium,
        marginHorizontal:20,
        flexDirection:"row",
        backgroundColor: Colors.white,
        shadowColor: '#000000',
        shadowOffset: 
        {
            width: 5,
            height: 10
        },
        shadowRadius: 10,
        shadowOpacity: 0.5,
        elevation: 5
    },
    questionContainer:{                              
        borderRadius:10,                           
        marginVertical:20,
        borderColor: Colors.medium,
        marginHorizontal:20,
        padding:10,
        paddingEnd:20,        
        backgroundColor: Colors.white,
        shadowColor: '#000000',
        shadowOffset: 
        {
            width: 5,
            height: 10
        },
        shadowRadius: 10,
        shadowOpacity: 2,
        elevation: 5,         
    },
    headers:{
        paddingTop:20,
        color:Colors.primary,
        fontSize:28,
        fontWeight:"bold",
        alignSelf:"center"
    },
    indexContainer:{  
        flex:1,                            
        borderRadius:20,                           
        marginVertical:20,
        borderColor: Colors.medium,
        marginHorizontal:20,
        paddingVertical:10,
        backgroundColor: Colors.white,
        shadowColor: '#000000',
        shadowOffset: 
        {
            width: 5,
            height: 10
        },
        shadowRadius: 10,
        shadowOpacity: 0.5,
        elevation: 5,     
    }
})

export default G1Descrimination;
