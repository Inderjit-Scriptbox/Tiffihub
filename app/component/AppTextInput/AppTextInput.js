import { View, Text, TextInput ,StyleSheet,Platform} from 'react-native'
import React,{useRef} from 'react'
import {MaterialCommunityIcons,FontAwesomeIcon} from '@expo/vector-icons'
import { Fumi,Sae } from 'react-native-textinput-effects';

import defaultStyle from './../../config/Style'
import Colors from '../../config/Colors'


export default function AppTextInput({icon,...otherProps}) {
  const input = useRef();
  return (
  
    <View style={styles.container}>
    <Fumi
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
  />
{/* <Sae
    label={label}
    iconClass={FontAwesomeIcon}
    iconName={'pencil'}
    iconColor={'white'}
    inputPadding={16}
    labelHeight={24}
    // active border height
    borderHeight={2}
    // TextInput props
    autoCapitalize={'none'}
    autoCorrect={false}
  /> */}
     {/* {icon && <MaterialCommunityIcons
      name = {icon}
      size = {20}
      color = {defaultStyle.Colors.medium}
      style = {styles.icon} 
      ></MaterialCommunityIcons>}
      <TextInput ref={input} style={[defaultStyle.text,{flex:1}]} {...otherProps}/> */}

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
        borderColor:defaultStyle.Colors.medium,
        width:"95%",
        margin:"2.5%",
        overflow:"hidden",
    },
    icon:{
        marginRight:10  
    }

})