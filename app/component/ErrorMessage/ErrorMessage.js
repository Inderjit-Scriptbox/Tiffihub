import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import AppText from '../AppText/AppText'
import Color from './../../config/Colors'

export default function ErrorMessage({error,visible}) {
 if(!visible || !error) {
    return null;
 }
 return <AppText style={styles.error}>{error}</AppText>
}

const styles = StyleSheet.create({
    error:
    {
        paddingStart: 10,
        color:Color.danger
    }
})