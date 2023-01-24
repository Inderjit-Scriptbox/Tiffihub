import {Image , ImageBackground,View,StyleSheet,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'


import Screen from '../component/Screen/Screen'
import AppText from "../component/AppText/AppText"
import SubmitButton from '../component/SubmitButton/SubmitButton'
import AppFormField from '../component/AppFormField/AppFormField'

const ForgetPasswordScreen = ({navigation}) => {
    const validationschema = Yup.object().shape(
        {
            email:Yup.string().required().email().label("Email"),
        
      }
    );
    
    return (
        <ImageBackground style={styles.loginbg} source = {require('../assets/loginbg.png')}>
          
          <Screen style={styles.container}>
          
            <Image source={require('../assets/logo/logo_black.png')} style={styles.logo}></Image>
          
            <AppText style={styles.headText}>Please enter your email to forget your password</AppText>
          
            <Formik
                  initialValues={{email:""}}
                  onSubmit={(values)=>                  
                    {
                      console.log(values);
                      return(navigation.navigate("OtpScreen",values));
                    }
                  }
                  validationSchema = {validationschema}
                  >
                      {()=>(
                          <>    
                          <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            KeyboardType="email-address"
                            textContentType="emailAddress"
                            label="Email"
                            iconName="email"
                            name="email">
                        </AppFormField>

                                                 
                              <SubmitButton
                                    style = {{marginTop:120}}
                                  title="Generate OTP"
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
      position: 'absolute',
      left: 0,
      top: 0,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,   
    },
    headText:{
      fontSize:18,
      fontWeight:"bold",
      marginBottom:50,
      textAlign: "center",
      marginHorizontal:40,
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
   
    signinText:{
      fontSize:16,
      fontWeight:"bold",
      marginTop:40,
      alignSelf: "center",
      paddingHorizontal:0.5      
    },

})

export default ForgetPasswordScreen;
