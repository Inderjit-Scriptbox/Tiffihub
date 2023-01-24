import { View, Text, TextInput ,StyleSheet,Platform} from 'react-native'
import React,{useRef,useState} from 'react'
import {MaterialCommunityIcons,FontAwesomeIcon} from '@expo/vector-icons'
import { Fumi } from 'react-native-textinput-effects';
import defaultStyle from './../../config/Style'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function AppTextInput({iconName,label,onBlur,isPassword,...otherProps}) {
  const input = useRef();
  const [closeEye,setCloseEye] = useState(true);
  return (
  
    <View style={styles.container}>
    {/* <Fumi
      // label={label}
      iconClass={MaterialCommunityIcons}
      // iconName={'email'}
      inputStyle={{color:Colors.dark}}
      iconColor={Colors.primary}
      iconSize={25}
      iconWidth={40}
      inputPadding={12}
      style={{flex: 1,margin:0,}}
      {...otherProps}
  /> */}

     {iconName && <MaterialCommunityIcons
      name = {iconName}
      size = {24}
      color={defaultStyle.Colors.primary}
      style = {styles.icon} 
      ></MaterialCommunityIcons>}


      
      {isPassword 
      ? 
      <TextInput  style={[defaultStyle.text,{flex:1,color:defaultStyle.Colors.secondary}]} placeholder={label} secureTextEntry={closeEye} {...otherProps}/>
      :
      <TextInput  style={[defaultStyle.text,{flex:1,color:defaultStyle.Colors.secondary}]} placeholder={label}  {...otherProps}/>
      }




      {isPassword && (closeEye ?
      <TouchableOpacity onPress={()=>setCloseEye(!closeEye)}>
       <FontAwesome name="eye-slash" size={20} color={defaultStyle.Colors.secondary}/>
       </TouchableOpacity> 
       :
       <TouchableOpacity onPress={()=>setCloseEye(!closeEye)}>
        <FontAwesome name="eye" size={20} color={defaultStyle.Colors.secondary} />
       </TouchableOpacity>)}

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      alignItems:"center",
        backgroundColor:defaultStyle.Colors.light,
        borderRadius:5,
        flexDirection:"row",
        borderWidth:2,
        borderColor:defaultStyle.Colors.primary,
        width:"94%",
        margin:"3%",
        overflow:"hidden",
        padding:"2%"
       
    },
    icon:{
        marginRight:10  
    }

})