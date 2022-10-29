import React from 'react';
import { View,TouchableOpacity,Text } from 'react-native';

import styles from './Styles';
import color from '../../config/Colors';

function AppButton({title,onPress,Color="primary",style,textstyle}) {
    return (        
        <TouchableOpacity style = {[styles.Button,{backgroundColor:color[Color]},style]} onPress={onPress}>
        <Text style = {[styles.Text,textstyle]}>
         {title}
        </Text> 
        </TouchableOpacity>
        
    );
}

export default AppButton;

