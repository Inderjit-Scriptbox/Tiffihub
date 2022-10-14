import React,{useRef,useEffect} from 'react';
import {View, StyleSheet,Animated} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../../config/Colors'

const VerifyAnimation = () => {
    const progress = useRef(new Animated.Value(0.5)).current;
    const scale = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.loop(
          Animated.parallel([
            Animated.sequence([
              Animated.spring(progress, { toValue: 1, useNativeDriver: true }),
              Animated.spring(progress, { toValue: 1, useNativeDriver: true }),
            ]),
            Animated.sequence([
              Animated.spring(scale, { toValue: 2, useNativeDriver: true }),
              Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
            ]),
          ]),
          { iterations: 1 }
        ).start();
      }, []);
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.square,
        {
            borderRadius: progress.interpolate({
              inputRange: [0.5, 1],
              outputRange: [20, 40],
            }),
            opacity: progress,
            transform: [
              { scale },
              {
                rotate: progress.interpolate(
                {
                    inputRange: [0.5, 1],
                    outputRange: ["0deg","360deg"],
                }
                ),
              },
             
            ],
          }
        ]}>
        <View style={{alignSelf: 'center'}}>

        <FontAwesome name="check-circle" size={60} color="white" />
        </View>
        </Animated.View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1,position:"absolute",alignSelf:"center",height:"100%"},
    square: {
        height:80,
        width:80,
        alignItem: 'center',
        justifyContent: 'center',
        backgroundColor:Colors.primary,
        marginTop:250,
       
      },

})

export default VerifyAnimation;
