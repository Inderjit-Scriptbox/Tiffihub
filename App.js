import { StyleSheet,View} from 'react-native';
import OnBoarding from './app/screens/OnBoarding';
import LoginScreen from './app/screens/loginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Register from './app/screens/register'
import OtpScreen from './app/screens/OtpScreen';
import HomeScreen from './app/screens/HomeScreen';
import ForgetPasswordScreen from './app/screens/ForgetPasswordScreen';
import { useState,useEffect} from 'react';
import ResetPassword from './app/screens/ResetPassword';
import ExamPage from './app/screens/Pages/Services/ExamPage';
import ExamScreen from './app/screens/ExamScreen';
import G1Description from './app/screens/Pages/Services/G1Descriptions';
import Colors from './app/config/Colors';
import HeaderImage from './app/component/HeaderImage/HeaderImage'
import NotificationScreen from './app/screens/NotificationScreen'
import AppText from './app/component/AppText/AppText';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FaqScreen from './app/screens/FaqScreen'
import WelcomeBackLogin from './app/screens/WelcomeBackLogin';
import EditProfile from './app/screens/Profile/EditProfile';
import ResetPasswordProfile from './app/screens/Profile/ResetPasswordProfile';

const Stack = createStackNavigator();

// export const ID = createContext();
 
export default function App() 
{ 

  const [promo,setPromo] = useState("true");
  const [isSelect,setSelect] = useState(false);
  
    const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('promo');
      if(value !== null) {
        
        console.log("App: ",value);
        setSelect(true);
        setPromo(value);
      }
      else
      {
        setSelect(true);
      }
    } catch(e) 
    {
      console.log("App: ",e);
    }
  }

  useEffect(()=>{
    getData();
  },[]); 


    const StackNavigator = ()=>(
      <Stack.Navigator screenOption={{headerStyle:{backgroundColor:Colors.primary}}}>

        {promo=="true" && <Stack.Screen name="OnBoarding" component={OnBoarding}
          options = {{
                  headerShown:false
                }} 
        />}

        <Stack.Screen name="LoginScreen"  
          options = 
                  {{
                    headerShown:false
                  }} 
          component={LoginScreen}
        />       
  
    
        <Stack.Screen name="HomeScreen"  component={HomeScreen} 
            options = {{
                    headerTintColor:Colors.white,
                    headerStyle:{backgroundColor:Colors.primary},
                    headerBackTitleVisible:false,
                    headerTitleAlign:"center",
                    headerTitle:(props)=><HeaderImage {...props}/>,
                    headerLeft: () => null,
            }}

           
          /> 

        
        <Stack.Screen name="Register" component={Register}
          options = {{
                  headerShown:false
                }} 
        />

        <Stack.Screen name="ResetPassword" component={ResetPassword}
          options = {{
                  headerShown:false
                }} 
        />

        <Stack.Screen name="OtpScreen" component={OtpScreen}
          options = {{
                  headerShown:false
                }} 
        />
        <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen}
          options = {{
                  headerShown:false
                }} 
        />
         
        <Stack.Screen name="ExamScreen" component={ExamScreen} 
          options = {{
                  headerTintColor:Colors.white,
                  headerTitleAlign:"center",
                  headerStyle:{backgroundColor:Colors
                  .primary},
                  headerBackTitleVisible:false,                             
                  headerTitle:()=><HeaderImage />}}/>
        <Stack.Screen name="ExamPage" component={ExamPage} 
          options = {{
                  headerTintColor:Colors.white,
                  headerTitleAlign:"center",
                  headerStyle:{backgroundColor:Colors.primary},
                  headerBackTitleVisible:false,        
                  headerTitle:(props)=><HeaderImage {...props}/>,
                  
                  }}/>
        <Stack.Screen name="G1Description" component={G1Description} 
          options = {{
                    headerTintColor:Colors.white, 
                    headerTitleAlign:"center",               
                    headerStyle:{backgroundColor:Colors.primary},
                    headerBackTitleVisible:false,
                    headerTitle:(props)=><HeaderImage {...props}/>
                  }}
  
                  />

        <Stack.Screen name="NotificationScreen" component={NotificationScreen}
          options = {{
                  headerTitle:"Notifications",
                  headerStyle:{backgroundColor:Colors.primary},
                  headerTintColor:Colors.white,
                  headerTitleAlign:"center"
                }}                 
        />
        <Stack.Screen name="FaqScreen" component={FaqScreen}
          options = {{
                  headerTitle:"Frequently Asked Questions",
                  headerStyle:{backgroundColor:Colors.primary},
                  headerTintColor:Colors.white,
                  headerTitleAlign:"center"
                }} />
        <Stack.Screen name="EditProfile" component={EditProfile}
          options = {{
                  headerTitle:"Edit Profile",
                  headerStyle:{backgroundColor:Colors.primary},
                  headerTintColor:Colors.white,
                  headerTitleAlign:"center",
                }} />
        <Stack.Screen name="ResetPasswordProfile" component={ResetPasswordProfile}
          options = {{
                  headerTitle:"Reset Password",
                  headerStyle:{backgroundColor:Colors.primary},
                  headerTintColor:Colors.white,
                  headerTitleAlign:"center",
                }} />
        <Stack.Screen name="WelcomeBackLogin"  
        options = {{
                  headerShown:false
                }} 
                component={WelcomeBackLogin}/>
  
      </Stack.Navigator>
    )
 
  return (
  !isSelect ?
        (
          
          <View style={styles.container}>
            <AppText style={{fontWeight:"bold",color:Colors.primary,fontSize:32}}>Loading...</AppText>
          </View>
        )
        :
        (
            <NavigationContainer>
              <StackNavigator/>
            </NavigationContainer>
          
        )
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


