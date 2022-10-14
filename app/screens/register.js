import {Image , ImageBackground,Alert,View,StyleSheet,TouchableOpacity,Dimensions} from 'react-native'
import React,{useState} from 'react'
import Screen from '../component/Screen/Screen'
import AppText from "../component/AppText/AppText"
import Colors from '../config/Colors'
import { CheckBox } from "@rneui/themed";
import { Formik } from 'formik'
import * as Yup from 'yup'
import SubmitButton from '../component/SubmitButton/SubmitButton'
import AppFormField from '../component/AppFormField/AppFormField'

export default function Register({navigation}) {
  const validationschema = Yup.object().shape(
    {
        email:Yup.string().required().email().label("Email"),
        password:Yup.string().required().min(4).label("Password")
    }
);

const [isSelected, setSelection] = useState(false);

console.log(isSelected);
  return (
  <ImageBackground style={styles.loginbg} source = {require('../assets/loginbg.png')}>
    
    <Screen style={styles.container}>
    
      <Image source={require('../assets/logo/logo_black.png')} style={styles.logo}></Image>
    
      <AppText style={styles.headText}>Get registered and be a recipient to daily dose delicious!</AppText>
    
      <Formik
            initialValues={{email:"",password:""}}
            onSubmit={(values)=>{navigation.navigate("OtpScreen",values)}}

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
                        
        
                        <View style={styles.checkbox}>
                            <CheckBox
                            title ="I would like to receive promotional Email from TiffinHub"
                            checked={isSelected}
                            onPress={() => setSelection(!isSelected)}/>
                        </View>
                        <SubmitButton
                            title="Register"
                        />
                        <AppText style={styles.tc}>By registering, you accept our</AppText>
                        <TouchableOpacity onPress={() => Alert.alert("Terms & Conditions","here is the Terms & Conditions")}><AppText style={[styles.tc,{textDecorationLine: 'underline'}]}>Terms & Conditions</AppText></TouchableOpacity>     
                        <View style={styles.text}>

                        <AppText style={styles.register}>Already have an account? </AppText>
                        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}><AppText style={styles.register}>Login</AppText></TouchableOpacity>
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
      marginBottom:30,
      paddingHorizontal:30,
      alignSelf: "center",
      textAlign: "center",
    },
    container:{
        flex: 1,                
    },
    logo:{
      marginTop:100,    
      marginBottom:10,
      alignSelf: 'center',
    },
    tc:{
      fontSize:15,
      color:Colors.medium,
      fontWeight:"bold",  
      alignSelf: "center",      
    },
    text:{
      flexDirection: "row",
      alignSelf: "center",
      
    },
    checkbox:{
        paddingBottom:40
    },
    register:{
        fontSize:16,
        fontWeight:"bold",
        marginTop:20,
        alignSelf: "center",
        paddingHorizontal:0.5     
      }
   
    
})