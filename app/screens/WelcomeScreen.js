import {StatusBar,StyleSheet,ImageBackground,Platform,View,TouchableOpacity,} from 'react-native';
import AppText from '../component/AppText/AppText';
import Colors from '../config/Colors';
import { MaterialIcons } from '@expo/vector-icons';


function WelcomeView() 
{
    return (  
        
       <View style={styles.container}>

         <View style={styles.menu}>
           <MaterialIcons name="restaurant-menu" size={30} color={Colors.white} style={{alignSelf:"center",justifyContent:"center"}}/> 
         </View>
      
       <View style={styles.header}>  
          <AppText style={{fontSize:36,fontWeight:"bold",marginHorizontal:20,color:Colors.medium,fontFamily:"monospace"}}>Welcome</AppText>
          <AppText style={{fontSize:26,marginHorizontal:20,fontWeight:"bold",fontFamily:"monospace"}}>Inderjit Singh</AppText>
       </View>
       <View>

       </View>

       </View>  
       
      
      );
}

export default WelcomeView;

const styles = StyleSheet.create({
  container: {flex:1,   
  },
  header:{
    paddingTop:Platform.OS === 'android'?StatusBar.currentHeight+30:30,
    width:"100%", 
    marginHorizontal:10      
  },
  menu:{
   
      flex: 1,
      position: "absolute",
      bottom: 0,
      margin: 20,
      height:50,
      width:50,
      padding:5,
      alignItems: 'center',
       justifyContent: 'center',         
      borderRadius:20,
      marginTop:StatusBar.currentHeight,
      backgroundColor:Colors.primary
     
  }
  
 })