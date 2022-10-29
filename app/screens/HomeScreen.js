import React,{createContext,useState} from 'react';
import {StyleSheet,View} from 'react-native';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar'
import Icon from 'react-native-vector-icons/FontAwesome';


import Services from './Services';
import FaqScreen from './FaqScreen';
import WelcomeScreen from './WelcomeScreen';
import Profile from './Profile';
import NotificationScreen from './NotificationScreen';
import NotificationData from '../data/NotificationData';
import Colors from '../config/Colors';
import AppText from '../component/AppText/AppText';


export const Data = createContext();
const Tabs = AnimatedTabBarNavigator();

const HomeScreen = () => {
    var counter = 0;
    const [data,setData] =useState(NotificationData);
    for(let item of data)
    {
        if(item.bool==false) 
        counter++;
    }
    return (
        <Data.Provider value={{data,setData}}>        
        <Tabs.Navigator tabBarOptions={{activeTintColor: Colors.primary,inactiveTintColor:Colors.medium,activeBackgroundColor:"#FFCFC5",shadow:true,floating:true}}>

            <Tabs.Screen 
                name="Home" 
                component={WelcomeScreen} 
                options={{
                            tabBarIcon: ({ focused, color, size }) => (
                                            <Icon
                                                name="home"
                                                size={size ? size : 24}
                                                color={focused ? color : Colors.medium}
                                                focused={focused}
                                            />
                                        )
                        }}
            />
            <Tabs.Screen 
                name="Services" 
                component={Services}
                
                options={{
                            tabBarIcon: ({ focused, color, size }) => (
                                <View>
                                    
                                            <Icon
                                                // name="dollar"
                                                name="puzzle-piece"
                                                size={size ? size : 24}
                                                color={focused ? color : Colors.medium}
                                                focused={focused}              
                                                />
                                </View>
                                        )
                        }} 
            />        
            <Tabs.Screen 
                name="Notification" 
                component={NotificationScreen}
                options={{
                            tabBarIcon: ({ focused, color, size }) => (
                                <View>

                                    {<View
                                        style={{ backgroundColor: Colors.primary,
                                        color: Colors.medium,
                                        height: 24,
                                        width:24,
                                        borderRadius:12,
                                        position: "absolute",
                                        top:-20,
                                        left:-20,
                                        alignItems: 'center',
                                        justifyContent: 'center',   
                                        }}>
                                        <AppText style={{fontWeight:"bold",color: Colors.white,fontSize:12}}>{counter}</AppText>
                                        </View>}

                                                <Icon
                                                    name="bell"
                                                    size={size ? size : 24}
                                                    color={focused ? color : Colors.medium}
                                                    focused={focused}
               
                                                />
                                </View>
                                )
                        }} 
            />
            <Tabs.Screen 
                name="FAQs" 
                component={FaqScreen}
                options={{
                            tabBarIcon: ({ focused, color, size }) => (
                                                <Icon
                                                    name="question"
                                                    size={size ? size : 24}
                                                    color={focused ? color : Colors.medium}
                                                    focused={focused}
               
                                                />
                                        )
                        }} 
            />
            <Tabs.Screen 
                name="Profile" 
                component={Profile}
                options={{
                            tabBarIcon: ({ focused, color, size }) => (
                                                <Icon
                                                    name="user"
                                                    size={size ? size : 24}
                                                    color={focused ? color : Colors.medium}
                                                    focused={focused}                
                                                />
                                        )
                        }}
            />        
        </Tabs.Navigator>      
        </Data.Provider>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default HomeScreen;
