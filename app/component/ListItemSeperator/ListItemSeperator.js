import { View, StyleSheet} from 'react-native';
import React from 'react';

import color from '../../config/Colors'

function ListItemSeperator()
{
    return (
    <View style = {styles}/>
    );
}

export default ListItemSeperator;

const styles = StyleSheet.create({
    width:"100%",
    backgroundColor:color.medium,
    height:1
})