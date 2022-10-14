import { View, Text, TextInput ,StyleSheet,Platform, TouchableWithoutFeedback, Modal, Button, FlatList} from 'react-native'
import React,{useState} from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import defaultStyle from './../../config/Style'
import AppText from '../AppText/AppText'
import PickerItem from './PickerItem'

export default function AppPicker({icon,placeholder,items,selectedItem,onSelectItem}) {
  const [modalVisible,setModalVisible] = useState(false);
  return (
    <>

    <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>

    <View style={styles.container}>
     {icon && <MaterialCommunityIcons
      name = {icon}
      size = {20}
      color = {defaultStyle.Colors.medium}
      style = {styles.icon} 
      ></MaterialCommunityIcons>}
    <AppText style = {styles.text}>{selectedItem?selectedItem.label:placeholder}</AppText>
    <MaterialCommunityIcons
      name = 'chevron-down'
      size = {20}
      color = {defaultStyle.Colors.medium}

 
      ></MaterialCommunityIcons>
    </View>
    </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType="slide">
      <Button title="Close" onPress={()=>setModalVisible(false)}/>
      <FlatList
        data={items}
        keyExtractor = {item=>item.Value.toString()}
        renderItem = {({item})=><PickerItem
        label={item.label}
        onPress={()=>{
          onSelectItem(item);
          setModalVisible(false);
        }}>

        </PickerItem>}
      />
    </Modal>
    
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultStyle.Colors.light,
        borderRadius:25,
        flexDirection:"row",
        width:"100%",
        marginVertical:10,
        padding:10      
        
    },
    icon:{
        marginRight:10  
    },
    text: {
        flex:1

    }

})