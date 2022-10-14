import {Image , ImageBackground,View,StyleSheet,TouchableOpacity,TextInput,Dimensions,Animated } from 'react-native'
import React,{useRef,useState,useEffect} from 'react'


import Screen from '../component/Screen/Screen'
import AppText from "../component/AppText/AppText"
import Colors from '../config/Colors'
import AppButton from '../component/AppButton/AppButton'
import { useRoute } from '@react-navigation/native'


const OtpScreen= ({navigation}) => {
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const route = useRoute();
    const [otp,setotp] = useState({1:"",2:"",3:"",4:""});   
    const [flag,setFlag] = useState(true); 
    
    return (
    <ImageBackground style={styles.loginbg} source = {require('../assets/loginbg.png')}>
      
      <Screen style={styles.container}>
    
        <Image source={require('../assets/logo/logo_black.png')} style={styles.logo}></Image>
    
          <AppText style={styles.text}>An OTP is sent to your registered email {route.params.email}</AppText>
    

          <AppText style={{color: Colors.medium,marginTop:40,marginBottom:10,paddingHorizontal:"10%",fontWeight:"800"}}>Enter OTP</AppText>
          <View style={{justifyContent: 'space-evenly',flexDirection: 'row'}}>
                <TextInput
                    ref={firstInput}                    
                    style = {styles.box}
                    maxLength = {1}
                    keyboardType = "number-pad"
                    onChangeText = {(text)=>{
                        setotp({...otp,1:text})
                        text && secondInput.current.focus()
                    }}
                />
                <TextInput
                    ref={secondInput}
                    style = {styles.box}
                    maxLength = {1}
                    keyboardType = "number-pad"
                    onChangeText = {(text)=>{
                        setotp({...otp,2:text})
                        text ? thirdInput.current.focus() : firstInput.current.focus();
                    }}
                />
                <TextInput
                    ref={thirdInput}                    
                    style = {styles.box}
                    maxLength = {1}
                    keyboardType = "number-pad"
                    onChangeText = {(text)=>{
                        setotp({...otp,3:text})
                        text ? fourthInput.current.focus() : secondInput.current.focus()
                    }}
                />
                <TextInput
                    ref={fourthInput}                    
                    style = {styles.box}
                    maxLength = {1}
                    keyboardType = "number-pad"
                    onChangeText = {(text)=>{
                        setotp({...otp,4:text})
                        !text && thirdInput.current.focus()
                    }}
                />
            </View>
            <TouchableOpacity onPress={()=>console.log("RESEND OTP")}>
                <AppText style={{color: Colors.primary,marginTop:10,paddingHorizontal:"10%",fontWeight:"800",alignSelf:"flex-end"}}>Resend OTP</AppText>
            </TouchableOpacity>

           
           <AppButton
            title="Verify OTP"
            onPress={()=>{
              if(otp["1"] =="1" && otp["2"]=="1" && otp["3"]=="1" && otp["4"]=="1")
              {                                       
                navigation.navigate("ResetPassword",{email:route.params.email});
              }
              }}
            style = {{marginTop:60}}
            ></AppButton>
            
<AppText style={styles.headText}>Verify OTP to continue...</AppText>
      
    </Screen>
  </ImageBackground>
  )
}
const styles = StyleSheet.create({
    loginbg:{
      position: 'absolute',
      left: 0,
      top: 0,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    
    },
    headText:{
      fontSize:18,
      fontWeight:"bold",
      marginTop:20,
      alignSelf: "center"
    },
    container:{
        flex: 1,             
    },
    logo:{
      marginTop:120,    
      marginBottom:20,
      alignSelf: 'center',
    },
    forget:{
      fontSize:16,
      fontWeight:"bold",
      marginTop:5,
      marginBottom:80,
      alignSelf: "flex-end",
      paddingHorizontal:"2.5%"
    },
    text:{
        textAlign: "center",
      fontSize:16,
      fontWeight:"bold",
      marginTop:20,
      alignSelf: "center",
      paddingHorizontal:1
      
    },
    
    box:{
        backgroundColor:Colors.light,
        fontWeight:"600",
        alignSelf:"center",
        textAlign: 'center',
        padding:10,
        fontSize:20,
        height:50,
        width:"12%",
        borderRadius:10,
        borderWidth:2,
        borderColor:Colors.medium,
        color:Colors.primary       
},




  
   
    
})



export default OtpScreen;
