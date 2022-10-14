import {StatusBar,StyleSheet,ImageBackground,Platform,View} from 'react-native';
import AppText from '../component/AppText/AppText';
import Colors from '../config/Colors';
import { MaterialIcons } from '@expo/vector-icons';


function WelcomeView() 
{
    return (
       <View style={styles.container}>
       <View style={{
        height:40,
        position: 'absolute',
        width:40,
        padding:5,
        alignSelf: 'flex-end',
        justifyContent:"flex-end",
        borderRadius:10,
        marginTop:StatusBar.currentHeight,
        backgroundColor:Colors.primary
       }}>
          <MaterialIcons name="restaurant-menu" size={28} color={Colors.white} style={{alignSelf:"center",justifyContent:"center"}}/>

       </View>
       <View style={styles.header}>
  
          <AppText style={{fontSize:32,fontWeight:"bold",marginHorizontal:20,color:Colors.medium,fontFamily:"normal"}}>Welcome</AppText>
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
    paddingTop:Platform.OS === 'android'?StatusBar.currentHeight:0,
    width:"100%",   
    
  },
  
 })