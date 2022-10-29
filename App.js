import { StyleSheet,StatusBar,Platform } from 'react-native';
import OnBoarding from './app/screens/OnBoarding';
import LoginScreen from './app/screens/loginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Register from './app/screens/register'
import OtpScreen from './app/screens/OtpScreen';
import HomeScreen from './app/screens/HomeScreen';
import ForgetPasswordScreen from './app/screens/ForgetPasswordScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Profile from './app/screens/Profile';
import ResetPassword from './app/screens/ResetPassword';
import ExamPage from './app/screens/Pages/Services/ExamPage';

const Stack = createStackNavigator();

  const StackNavigator = ()=>(
    <Stack.Navigator screenOptions={{headerShown:false,animation: 'none'}}>
      <Stack.Screen name="OnBoarding" component={OnBoarding}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen name="Register" component={Register}/>
      <Stack.Screen name="ResetPassword" component={ResetPassword}/>
      <Stack.Screen name="OtpScreen" component={OtpScreen}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
      <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen}/>
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name="ExamPage" component={ExamPage}/>
    </Stack.Navigator>
  )
export default function App() {  

 
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
    
    //  <LoginScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30,    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
