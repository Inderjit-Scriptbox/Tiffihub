import { View,Image,StyleSheet, TouchableHighlight} from 'react-native'
import React from 'react'
import AppText from '../AppText/AppText'
import colors from '../../config/Colors'
import MaterialCommunityIcons from '@expo/vector-icons'
import { color } from '@rneui/base'

function FaqListItem({que,ans,flag,onPress}) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.subcontainer}>
       
            <View style={styles.container}>
                <AppText style={{fontWeight:"bold",flex:1,color:flag?colors.primary:colors.medium}}>{que}</AppText>
                {!flag ? <AppText style={{fontWeight:"bold",fontSize:18,padding:5,color:colors.medium}}>+</AppText>:<AppText style={{color:colors.primary,transform:[{rotate: '45 deg'}],fontWeight:"bold",fontSize:18,padding:5}}>+</AppText>}           
            </View>
                {flag && <AppText>{ans}</AppText>}
      
    </View>
    </TouchableHighlight>

  );
}

export default FaqListItem;
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        alignItems: 'center',
        
        
    },
    subcontainer:{
        flex: 1,
        backgroundColor:colors.white,
        margin:10,
        padding:10,
        borderRadius:10
    }
    
});