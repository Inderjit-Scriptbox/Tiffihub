import React from 'react';
import {View, StyleSheet} from 'react-native';

const QuestionButtonComponent = ({start,end}) => {
    
    if(end-start%5==0)
    {
    return (
        <View>
            <AppButton title={start} style={styles.countbtn}/>
            <AppButton title={start+1} style={styles.countbtn}/>
            <AppButton title={start+2} style={styles.countbtn}/>
            <AppButton title={start+3} style={styles.countbtn}/>
            <AppButton title={start+4} style={styles.countbtn}/>
        </View>
    );}
    else if(end-start%5==0)
    {

    }
}

const styles = StyleSheet.create({})

export default QuestionButtonComponent;
