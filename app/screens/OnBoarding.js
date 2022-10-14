import { View, FlatList,StyleSheet,Animated,Platform, StatusBar} from 'react-native'
import React,{useState,useRef} from 'react'
import {navigation} from "@react-navigation/native"

import OnBoardingItem from  '../component/PromotionalScreens/OnBoardingItem'
import Paginator from '../component/PromotionalScreens/Paginator';
import promoData from "../data/promoData"
import Screen from "../component/Screen/Screen"


export default function Onboarding({navigation}) {

  const [currentIndex,setCurrentIndex] = useState(0);

  const scrollx = useRef(new Animated.Value(0)).current;

  const slideRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {setCurrentIndex(viewableItems[0].index)}).current;
  // console.log(currentIndex)
  const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;

  const navigateToLogin = ()=> navigation.navigate("LoginScreen");


  return (
    <Screen style={styles.container}>
      <View style={{flex:3,position: 'absolute'}}>
      
        <FlatList
          data = {promoData}
          keyExtractor = {(item)=>item.id}
          renderItem =  {({item}) => 
                            <OnBoardingItem 
                              name = {item.name} 
                              text = {item.text}
                              subText = {item.subText}
                              id = {item.id}
                              onPress = {navigateToLogin}>
                              
                            </OnBoardingItem>
                        }
          horizontal
          showsHorizontalScrollIndicator = {false}
          pagingEnabled
          bounces={false}
          onScroll = {Animated.event([{nativeEvent:{contentOffset:{x:scrollx}}}],{useNativeDriver:false})}
          scrollEventThrottle ={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
          >

      </FlatList>
    </View>

    <Paginator data={promoData} scrollx={scrollx}/>
    </Screen>

  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTopSelf:Platform==="android"?StatusBar.currentHeight:0
    }
})