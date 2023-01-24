import { View,Image,StyleSheet, TouchableHighlight} from 'react-native'
import React from 'react'
import AppText from '../AppText/AppText'
import colors from '../../config/Colors'

function NotificationItem({onPress,image,text,subtext,bool}) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.light} 
    >

        <View style={[styles.container,{backgroundColor:bool?colors.medium:colors.light}]}>
            <Image style={styles.img} source={image}/>
            <View style={styles.subcontainer}>
                <AppText style={{fontWeight:"bold",fontSize:12,color:colors.medium}}>{text}</AppText>
                <AppText style={{fontWeight:"bold",fontSize:14,flex:1,color:colors.dark}}>{subtext}</AppText>                
            </View>

        </View>
    </TouchableHighlight>

  );
}

export default NotificationItem;
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        alignItems: 'center',
        borderRadius:10,
        overflow:"hidden",
        borderWidth:1,
        borderColor:"#E8EEF3",
        margin:3
          
    },
    subcontainer:{
        flex: 1,
          
        padding:10,
        
    },
    img:{
        height:76,
        
        width:82,
    }
    
});