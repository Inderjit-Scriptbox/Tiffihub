import React,{useState} from 'react';
import {View, StyleSheet,Text,StatusBar,TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import AppButton from '../../../component/AppButton/AppButton';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import Colors from '../../../config/Colors';
import AppText from '../../../component/AppText/AppText'
import { Entypo } from '@expo/vector-icons';
import { Image } from 'react-native';



const ExamPage = ({navigation}) => {
    const [sub,setSub] =useState({1:true,2:false,3:false});
    return (
            <SafeAreaView style={styles.container}>
        <ScrollView >
            <TouchableOpacity style={{marginHorizontal:30,alignSelf:"flex-end",marginTop:10}}
            onPress={() =>navigation.navigate("HomeScreen")}>
            <Ionicons name="ios-arrow-back-outline" size={32} color="black" />
            </TouchableOpacity>
            <AppText style={{color:Colors.primary,fontSize:28,fontWeight:"bold",alignSelf:"center"}}>Examination Page</AppText>
            <View style={{                              
                            borderRadius:20,                           
                            marginVertical:20,
                            borderColor: Colors.medium,
                            marginHorizontal:20,
                            paddingVertical:10,
                            backgroundColor: Colors.white,
                            shadowColor: '#000000',
                            shadowOffset: {
                            width: 5,
                            height: 10
                            },
                            shadowRadius: 20,
                            shadowOpacity: 1,
                            elevation: 10,     
                    }}>

            <View style = {styles.btncontainer}>
            <AppButton title="1" style={styles.countbtn}/>
            <AppButton title="2" style={styles.countbtn}/>
            <AppButton title="3" style={styles.countbtn}/>
            <AppButton title="4" style={styles.countbtn}/>
            <AppButton title="5" style={styles.countbtn}/>
            </View>
            <View style = {styles.btncontainer}>
            <AppButton title="6" style={styles.countbtn}/>
            <AppButton title="7" style={styles.countbtn}/>
            <AppButton title="8" style={styles.countbtn}/>
            <AppButton title="9" style={styles.countbtn}/>
            <AppButton title="10" style={styles.countbtn}/>
            </View>
            <View style = {styles.btncontainer}>
            <AppButton title="11" style={styles.countbtn}/>
            <AppButton title="12" style={styles.countbtn}/>
            <AppButton title="13" style={styles.countbtn}/>
            <AppButton title="14" style={styles.countbtn}/>
            <AppButton title="15" style={styles.countbtn}/>
            </View>
            <View style = {styles.btncontainer}>
            <AppButton title="16" style={styles.countbtn}/>
            <AppButton title="17" style={styles.countbtn}/>
            <AppButton title="18" style={styles.countbtn}/>
            <AppButton title="19" style={styles.countbtn}/>
            <AppButton title="20" style={styles.countbtn}/>
            </View>
            <View style = {styles.btncontainer}>
            <AppButton title="21" style={styles.countbtn}/>
            <AppButton title="22" style={styles.countbtn}/>
            <AppButton title="23" style={styles.countbtn}/>
            <AppButton title="24" style={styles.countbtn}/>
            <AppButton title="25" style={styles.countbtn}/>
            </View>
            <View style = {{flexDirection:"row",padding:10,marginHorizontal:"5%"}}>
                <Octicons name="dot-fill" size={24} color="green" />
                <AppText style={{flex: 1}}> {0} Correct</AppText>
                <Octicons name="dot-fill" size={24} color="red" />
                <AppText> {0} Incorrect</AppText>
            </View>
            <View style = {{flexDirection:"row",paddingHorizontal:5,marginTop:10,marginHorizontal:"5%"}}>
            <Entypo name="check" size={24} color={Colors.medium} />
            <AppText>8 Mistakes are allowed to pass.</AppText>
            </View>
            <View style = {{flexDirection:"row",padding:5,marginHorizontal:"5%"}}>
            <Entypo name="check" size={24} color={Colors.medium} />
            <AppText>Passing marks are 80%</AppText>
            </View>
            </View>

            <View style = {{flexDirection:"row",paddingHorizontal:5,marginTop:10,marginHorizontal:"5%",alignSelf: "center"}}>
            <AppButton style = {{width:"30%",marginHorizontal:"1%",backgroundColor:sub[1]?Colors.primary:Colors.white}} textstyle={{fontSize:14,color:sub[1]?"white":"black"}} title="English" onPress={()=>{setSub({1:true,2:false,3:false})}}/>
            <AppButton style = {{width:"30%",marginHorizontal:"1%",backgroundColor:sub[2]?Colors.primary:Colors.white}} textstyle={{fontSize:14,color:sub[2]?"white":"black"}} title="Hindi" onPress={()=>{setSub({2:true,1:false,3:false})}}/>
            <AppButton style = {{width:"30%",marginHorizontal:"1%",backgroundColor:sub[3]?Colors.primary:Colors.white}} textstyle={{fontSize:14,color:sub[3]?"white":"black"}} title="Punjabi" onPress={()=>{setSub({3:true,2:false,1:false})}}/>           
            </View>

            <View style={{                              
                            borderRadius:10,                           
                            marginVertical:20,
                            borderColor: Colors.medium,
                            marginHorizontal:20,
                            padding:10,
                            paddingEnd:20,        
                            backgroundColor: Colors.white,
                            shadowColor: '#000000',
                            shadowOffset: {
                            width: 5,
                            height: 10
                            },
                            shadowRadius: 10,
                            shadowOpacity: 2,
                            elevation: 5,
                             
                    }}>
                    <View style={{flexDirection:"row"}}>
                        <AppText style={{fontWeight:"bold"}}>5. </AppText>
                        <AppText>Class M1 licensed motorcylists driving at night should do the following to prevent accidents.</AppText>
                    </View>
                    <Image source={require('../../../assets/test/stop.png')} style={{height:150,width:150,alignSelf:"center",margin:10}}/>
            </View>

            
            <View style={{                              
                            borderRadius:10,                           
                            marginVertical:10,
                            borderColor: Colors.medium,
                            marginHorizontal:20,
                            flexDirection:"row",
                            backgroundColor: Colors.white,
                            shadowColor: '#000000',
                            shadowOffset: {
                            width: 5,
                            height: 10
                            },
                            shadowRadius: 10,
                            shadowOpacity: 1,
                            elevation: 5,
                                
                    }}>
                
                    <View style={{                              
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
                                    shadowOpacity: 1,
                                    elevation: 5,
                                         
                            }}>
                            <AppText style={{fontWeight:"bold",color: Colors.white,fontSize:18}}>A.</AppText>    
                            </View>
                            <AppText style={{flex:1,padding:5,alignSelf:"center"}}>Option A</AppText>

            </View>

            <View style={{                              
                            borderRadius:10,                           
                            marginVertical:10,
                            borderColor: Colors.medium,
                            marginHorizontal:20,
                            flexDirection:"row",
                            backgroundColor: Colors.white,
                            shadowColor: '#000000',
                            shadowOffset: {
                            width: 5,
                            height: 10
                            },
                            shadowRadius: 10,
                            shadowOpacity: 1,
                            elevation: 5,
                                
                    }}>
                
                    <View style={{                              
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
                                    shadowOpacity: 1,
                                    elevation: 5,
                                         
                            }}>
                            <AppText style={{fontWeight:"bold",color: Colors.white,fontSize:18}}>B.</AppText>    
                            </View>
                            <AppText style={{flex:1,padding:5,alignSelf:"center"}}>Option B</AppText>

            </View>

            <View style={{                              
                            borderRadius:10,                           
                            marginVertical:10,
                            borderColor: Colors.medium,
                            marginHorizontal:20,
                            flexDirection:"row",
                            backgroundColor: Colors.white,
                            shadowColor: '#000000',
                            shadowOffset: {
                            width: 5,
                            height: 10
                            },
                            shadowRadius: 10,
                            shadowOpacity: 1,
                            elevation: 5,
                                
                    }}>
                
                    <View style={{                              
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
                                    shadowOpacity: 1,
                                    elevation: 5,
                                         
                            }}>
                            <AppText style={{fontWeight:"bold",color: Colors.white,fontSize:18}}>C.</AppText>    
                            </View>
                            <AppText style={{flex:1,padding:5,alignSelf:"center"}}>Option C</AppText>

            </View>

            <View style={{                              
                            borderRadius:10,                           
                            marginVertical:10,
                            borderColor: Colors.medium,
                            marginHorizontal:20,
                            flexDirection:"row",
                            backgroundColor: Colors.white,
                            shadowColor: '#000000',
                            shadowOffset: {
                            width: 5,
                            height: 10
                            },
                            shadowRadius: 10,
                            shadowOpacity: 1,
                            elevation: 5,
                                
                    }}>
                
                    <View style={{                              
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
                                    shadowOpacity: 1,
                                    elevation: 5,
                                         
                            }}>
                            <AppText style={{fontWeight:"bold",color: Colors.white,fontSize:18}}>D.</AppText>    
                            </View>
                            <AppText style={{flex:1,padding:5,alignSelf:"center"}}>Option D</AppText>

            </View>
            
            <View style={{marginBottom:100}}></View>
            
        </ScrollView>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
               
        paddingTop:StatusBar.currentHeight,         
               
    },
    countbtn:{
        width:"14%",
        margin:"1.5%",
        padding:10
    },
    btncontainer:{
        flexDirection: "row",
        alignSelf:"center",        
    },
})

export default ExamPage;
