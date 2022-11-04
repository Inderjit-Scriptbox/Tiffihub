import React,{useState,useEffect} from 'react';
import {View, StyleSheet,Text,StatusBar,TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import AppButton from '../../../component/AppButton/AppButton';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import Colors from '../../../config/Colors';
import AppText from '../../../component/AppText/AppText'
import { Entypo } from '@expo/vector-icons';
import { Image } from 'react-native';
import { ActivityIndicator } from 'react-native';




const ExamPage = ({navigation}) => {


    const [index,setIndex] = useState(0);
   


    const [option1,setOption1] = useState();
    const [option2,setOption2] = useState();
    const [option3,setOption3] = useState();
    const [option4,setOption4] = useState();
    const [option5,setOption5] = useState();
    const [option6,setOption6] = useState();

    const [selectedColor,setSelectedColor] = useState(Colors.white)

    const [correctCount,setCorrectCount] = useState(0);
    const [inCorrectCount,setInCorrectCount] = useState(0);

    const [question,setQuestion] = useState();
    


    const [language, setLanguage] = useState("english");

    const [myData,setMyData] = useState();
    const [isLoaded,setIsLoaded] = useState(true);

    const [correctOption,setCorrectOption] = useState();

    
    const [isCorrectOption1,setIsCorrectOption1] = useState(Colors.white);
    const [isCorrectOption2,setIsCorrectOption2] = useState(Colors.white);
    const [isCorrectOption3,setIsCorrectOption3] = useState(Colors.white);
    const [isCorrectOption4,setIsCorrectOption4] = useState(Colors.white);
    const [isCorrectOption5,setIsCorrectOption5] = useState(Colors.white);
    const [isCorrectOption6,setIsCorrectOption6] = useState(Colors.white);   
    
    const [letters,setLetters] = useState(['A','B','C','D','E','F'])

    const getData = async () => {
        try {
            var axios = require('axios');
            var config = {
            method: 'get',
                url: 'https://tifinapi.tiffinhub.ca/tiffin_api/get_questions',
            headers: { }
            };

            await axios(config)
            .then(function (response) {

                const object = response.data;
                const myData = JSON.parse(object);

                setMyData(myData);
                setIsLoaded(false);

                setOption1(myData["data"][index]["Eng_Option_1"]);
                setOption2(myData["data"][index]["Eng_Option_2"]);
                setOption3(myData["data"][index]["Eng_Option_3"]);
                setOption4(myData["data"][index]["Eng_Option_4"]);
                setOption5(myData["data"][index]["Eng_Option_5"]);
                setOption6(myData["data"][index]["Eng_Option_6"]);
                setQuestion(myData["data"][index]["Question_English"]);
                setCorrectOption(myData["data"][index]["Correct_Options"]);
            })
            .catch(function (error) {
            console.log(error);
            });
        } 
        catch (error) 
        {
            console.log(error);    
        }
    }

    useEffect(()=>{getData();},[]);
    
    


        
        const btnHandler = (index) =>{
            setIndex(index);
            setSelectedColor(Colors.white);
            setLetters(['A','B','C','D','E','F']);
            setQuestion(myData["data"][index]["Question_English"]);
            setOption1(myData["data"][index]["Eng_Option_1"]);
            setOption2(myData["data"][index]["Eng_Option_2"]);
            setOption3(myData["data"][index]["Eng_Option_3"]);
            setOption4(myData["data"][index]["Eng_Option_4"]);
            setOption5(myData["data"][index]["Eng_Option_5"]);
            setOption6(myData["data"][index]["Eng_Option_6"]); 
            setCorrectOption(myData["data"][index]["Correct_Options"]);

            setLanguage("english");          
        }

        const  subjectHandler = (lan) => {
            if(lan=="english")
            {
                setQuestion(myData["data"][index]["Question_English"]);
                setOption1(myData["data"][index]["Eng_Option_1"]);
                setOption2(myData["data"][index]["Eng_Option_2"]);
                setOption3(myData["data"][index]["Eng_Option_3"]);
                setOption4(myData["data"][index]["Eng_Option_4"]);
                setOption5(myData["data"][index]["Eng_Option_5"]);
                setOption6(myData["data"][index]["Eng_Option_6"]);
                setLetters(['A','B','C','D','E','F']);


            }
            else if(lan=="hindi")
            {

                setQuestion(myData["data"][index]["Question_Hindi"]);
                setOption1(myData["data"][index]["Hindi_Option_1"]);
                setOption2(myData["data"][index]["Hindi_Option_2"]);
                setOption3(myData["data"][index]["Hindi_Option_3"]);
                setOption4(myData["data"][index]["Hindi_Option_4"]);
                setOption5(myData["data"][index]["Hindi_Option_5"]);
                setOption6(myData["data"][index]["Hindi_Option_6"]);
                setLetters(["क","ख","ग","घ","च","छ"]);

            }
            else if(lan=="punjabi")
            {
                setQuestion(myData["data"][index]["Question_Punjabi"]);
                setOption1(myData["data"][index]["Punjabi_Option_1"]);
                setOption2(myData["data"][index]["Punjabi_Option_2"]);
                setOption3(myData["data"][index]["Punjabi_Option_3"]);
                setOption4(myData["data"][index]["Punjabi_Option_4"]);
                setOption5(myData["data"][index]["Punjabi_Option_5"]);
                setOption6(myData["data"][index]["Punjabi_Option_6"]);
                setLetters(["ਓ","ਅ","ੲ","ਸ","ਹ","ਕ"]);

            }   
        }


        const checkHandler = (id) => 
        {
            if(correctOption==id)
            {
                setSelectedColor("green");
            }
            else
            {
                setSelectedColor("red")
            }
            
        }
 

        return ( 
        isLoaded?
        (
            <SafeAreaView style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
                <ActivityIndicator size="large" color={Colors.primary}/>        
            </SafeAreaView>
        )
        :   
        (
            <SafeAreaView style={styles.container}>
                <ScrollView >
                    <TouchableOpacity style={{marginHorizontal:30,alignSelf:"flex-end",marginTop:10}}
                        onPress={() =>navigation.navigate("HomeScreen")}>
                        <Ionicons name="ios-arrow-back-outline" size={32} color="black" />
                    </TouchableOpacity>
                    <AppText style={styles.headers}>Examination Page</AppText>
                
                    <View style={styles.indexContainer}>    
                        <View>
                            <ScrollView style={{height:300,padding:5}} nestedScrollEnabled>
                                <View style = {styles.btncontainer}>
                                    {myData["data"].map((item, index) =>
                                    <AppButton key={index} title={index+1} style={[styles.countbtn,{}]} onPress={() => btnHandler(index)}/>)}
                                </View>
                            </ScrollView>
                        </View>
                        <View style = {{flexDirection:"row",padding:10,marginHorizontal:"5%"}}>
                            <Octicons name="dot-fill" size={24} color="green" />
                            <AppText style={{flex: 1}}> {correctCount} Correct</AppText>
                            <Octicons name="dot-fill" size={24} color="red" />
                            <AppText> {inCorrectCount} Incorrect</AppText>
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
                        <View style={{flexDirection:"row"}}>
                            <AppText style={{fontWeight:"bold"}}>{index+1}. </AppText>
                            <AppText>{question}</AppText>
                        </View>
                        {myData["data"][index]["Image_URL"]!=null && <Image source={require("../../../assets/test/stop.png")} style={{height:150,width:150,alignSelf:"center",margin:10}}/>}
                    </View>
    
                
                    {option1!=null && <View style={[styles.whiteContainer,{backgroundColor:selectedColor}]}>                    
                        <View style={styles.primaryContainer}>
                            <AppText style={{fontWeight:"bold",color: Colors.white,fontSize:18}}>{letters[0]}.</AppText>    
                        </View>
                        <TouchableOpacity style={{flex:1}} onPress={() => {checkHandler(1);}}>
                            
                                <AppText style={{flex:1,padding:5,color:selectedColor!=Colors.white?Colors.white:"black"}}>{option1}</AppText>
                            
                        </TouchableOpacity>
                    </View>}
    
                    {option2!=null && <View style={[styles.whiteContainer,{backgroundColor:selectedColor}]}>                    
                        <View style={styles.primaryContainer}>
                            <AppText style={{fontWeight:"bold",color: Colors.white,fontSize:18}}>{letters[1]}.</AppText>    
                        </View>
                        <TouchableOpacity style={{flex:1}} onPress={() => {checkHandler(2);}}>                           
                            <AppText style={{flex:1,padding:5,color:selectedColor!=Colors.white?Colors.white:"black"}}>{option2}</AppText>
                        </TouchableOpacity>
                    </View>}
    
                    {option3!=null && <View style={[styles.whiteContainer,{backgroundColor:selectedColor}]}>                    
                        <View style={styles.primaryContainer}>
                            <AppText style={{fontWeight:"bold",color: Colors.white,fontSize:18}}>{letters[2]}.</AppText>    
                        </View>
                        <TouchableOpacity style={{flex:1}} onPress={() => {checkHandler(3);}}>                            
                            <AppText style={{flex:1,padding:5,color:selectedColor!=Colors.white?Colors.white:"black"}}>{option3}</AppText>                            
                        </TouchableOpacity>
                    </View>}
    
                   {option4!=null && <View style={[styles.whiteContainer,{backgroundColor:selectedColor}]}>                    
                        <View style={styles.primaryContainer}>
                            <AppText style={{fontWeight:"bold",color: Colors.white,fontSize:18}}>{letters[3]}.</AppText>    
                        </View>
                        <TouchableOpacity style={{flex:1}} onPress={() => {checkHandler(4);}}>                            
                            <AppText style={{flex:1,padding:5,color:selectedColor!=Colors.white?Colors.white:"black"}}>{option4}</AppText>                            
                        </TouchableOpacity>
                    </View>}

                    {option5!=null && <View style={[styles.whiteContainer,{backgroundColor:selectedColor}]}>                    
                        <View style={styles.primaryContainer}>
                            <AppText style={{fontWeight:"bold",color: Colors.white,fontSize:18}}>{letters[4]}.</AppText>    
                        </View>
                        <TouchableOpacity style={{flex:1}} onPress={() => {checkHandler(5);}}>                            
                            <AppText style={{flex:1,padding:5,color:selectedColor!=Colors.white?Colors.white:"black"}}>{option5}</AppText>                            
                        </TouchableOpacity>
                    </View>}

                    {option6!=null && <View style={[styles.whiteContainer,{backgroundColor:selectedColor}]}>                    
                        <View style={styles.primaryContainer}>
                            <AppText style={{fontWeight:"bold",color: Colors.white,fontSize:18}}>{letters[5]}.</AppText>    
                        </View>
                        <TouchableOpacity style={{flex:1}} onPress={() => {checkHandler(6);}}>                            
                            <AppText style={{flex:1,padding:5,color:selectedColor!=Colors.white?Colors.white:"black"}}>{option6}</AppText>                           
                        </TouchableOpacity>
                    </View>}
                
                    <View style={{marginBottom:40}}></View>

                    <AppButton style={{}}/>

                    <View style={{marginBottom:60}}></View>
                
                </ScrollView>
            </SafeAreaView>
        ));
    
    
}

const styles = StyleSheet.create({
    container:{               
        paddingTop:StatusBar.currentHeight+15,       
    },
    countbtn:{
        width:"14%",
        margin:"1.5%",
        padding:10,
        borderWidth:2,
        borderColor:Colors.primary
    },
    btncontainer:{
        flexDirection: "row",
        alignSelf:"center", 
        justifyContent:"center",
        flexWrap:"wrap"       
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

export default ExamPage;
