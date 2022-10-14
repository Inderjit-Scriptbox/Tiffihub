import {Image , ImageBackground,View,StyleSheet,TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { useRoute } from '@react-navigation/native'


import Screen from '../component/Screen/Screen'
import AppText from "../component/AppText/AppText"
import SubmitButton from '../component/SubmitButton/SubmitButton'
import AppFormField from '../component/AppFormField/AppFormField'
import VerifyAnimation from '../component/Animation/verifyAnimation'



const ForgetPasswordScreen = ({navigation}) => {
    const validationschema = Yup.object().shape(
        {
            password:Yup.string().required().min(4).label("Password"),
            confirmPassword:Yup.string().required().label("confirmPassword")
        
      }
    );
    const route = useRoute();

    return (
        <ImageBackground style={styles.loginbg} source = {require('../assets/loginbg.png')}>
          
          <Screen style={styles.container}>
          
            <Image source={require('../assets/logo/logo_black.png')} style={styles.logo}></Image>
          
            <AppText style={styles.headText}>Reset your password</AppText>
            <AppText style={{color:"green",fontWeight:"bold",alignSelf:"center"}}>OTP Verified Successfully</AppText>


            <VerifyAnimation/>
            
          
            <Formik
                  initialValues={{email:route.params.email,password:"",confirmPassword:""}}
                  onSubmit={(values)=>{console.log(values);
                  if(values.password===values.confirmPassword){
                  return(navigation.navigate("LoginScreen",values));}
                  else{
                    Alert.alert("Error","Password mismatched error!");
                  }}}
                  validationSchema = {validationschema}
                  >
                      {()=>(
                          <>
                               <AppFormField
                                  autoCapitalize="none"
                                  autoCorrect={false}
                                  iconName="lock"
                                  label="Password"
                                  secureTextEntry
                                  textContentType="password"
                                  name="password">
                              </AppFormField>

                              <AppFormField
                                  autoCapitalize="none"
                                  autoCorrect={false}
                                  iconName="lock"
                                  label="Confirm Password"
                                  secureTextEntry
                                  textContentType="password"
                                  name="confirmPassword">
                              </AppFormField> 
                              
                              <SubmitButton
                                    style = {{marginTop:30}}
                                  title="Reset Password"
                              />
                              <TouchableOpacity onPress={()=>navigation.navigate("LoginScreen")}>      
                              <AppText style={styles.signinText}>Or Continue Signing In</AppText>
                              </TouchableOpacity>
                              
                          </>
                      )}
                  </Formik>
          </Screen>
        </ImageBackground>
        );
}

const styles = StyleSheet.create({

    loginbg:{
        flex: 1,
        width:"100%",
        height:"100%",    
    },
    headText:{
      fontSize:22,
      fontWeight:"bold",
      marginBottom:160,
      textAlign: "center",
      marginHorizontal:40,
      alignSelf: "center"
    },
    container:{
        flex: 1,                
    },
    logo:{
      marginTop:100,    
      marginBottom:20,
      alignSelf: 'center',
    },
   
    signinText:{
      fontSize:16,
      fontWeight:"bold",
      marginTop:40,
      alignSelf: "center",
      paddingHorizontal:0.5      
    },

})

export default ForgetPasswordScreen;
