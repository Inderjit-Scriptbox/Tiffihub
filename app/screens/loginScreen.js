import {Image , ImageBackground,View,StyleSheet,TouchableOpacity ,Dimensions} from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Screen from '../component/Screen/Screen'
import AppText from "../component/AppText/AppText"
import SubmitButton from '../component/SubmitButton/SubmitButton'
import AppFormField from '../component/AppFormField/AppFormField'

export default function LoginScreen({navigation}) {
  const validationschema = Yup.object().shape(
    {
        email:Yup.string().required().email().label("Email"),
        password:Yup.string().required().min(4).label("Password")
    }
);


  return (
  <ImageBackground style={styles.loginbg} source = {require('../assets/loginbg.png')}>
    
    <Screen style={styles.container}>
    
      <Image source={require('../assets/logo/logo_black.png')} style={styles.logo}></Image>
    
      <AppText style={styles.headText}>Login to place your orders</AppText>
    
      <Formik
            initialValues={{email:"",password:""}}
            onSubmit={(values)=>{navigation.navigate("HomeScreen",values)}}
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

                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            iconName="lock"
                            label="Password"
                            secureTextEntry
                            textContentType="password"
                            name="password">
                        </AppFormField>
                        
                        <TouchableOpacity onPress={()=>navigation.navigate("ForgetPasswordScreen")}>

                        <AppText style={styles.forget}>Forget Password?</AppText>
                        </TouchableOpacity>
                        <SubmitButton
                            title="Login"
                            style={{marginTop:80,}}
                        />
                        <View style={styles.text}>

                        <AppText style={styles.register}>Don't have an account yet? </AppText>
                        <TouchableOpacity onPress={() => navigation.navigate("Register")}><AppText style={styles.register}>Register</AppText></TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
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
      marginBottom:40,
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
    forget:{
      fontSize:16,
      fontWeight:"bold",
      marginTop:5,
      alignSelf: "flex-end",
      paddingHorizontal:"2.5%"
    },
    register:{
      fontSize:16,
      fontWeight:"bold",
      marginTop:40,
      alignSelf: "center",
      paddingHorizontal:0.5
      
    },
    text:{
      flexDirection: "row",
      alignSelf: "center",
      
    }
  
   
    
})