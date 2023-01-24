import React from 'react';
import { View,TouchableOpacity,Text } from 'react-native';

import styles from './Styles';
import color from '../../config/Colors';

function AppButton({title,onPress,Color="primary",style,textstyle,isDisabled}) {
    return (        
        <TouchableOpacity style = {[styles.Button,{backgroundColor:color[Color]},style]} disabled={isDisabled} onPress={onPress}>
        <Text style = {[styles.Text,textstyle]}>
         {title}
        </Text> 
        </TouchableOpacity>
        
    );
}

export default AppButton;

