import React,{createContext} from 'react';
import {StyleSheet,View} from 'react-native';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar'
import Icon from 'react-native-vector-icons/FontAwesome';
import Services from './Services';
import WelcomeScreen from './WelcomeScreen';
import ProfileScreen from './ProfileScreen';
import Colors from '../config/Colors';
import { useRoute } from '@react-navigation/native';


const Tabs = AnimatedTabBarNavigator();

export const DATA = createContext();


const HomeScreen = () => 
{      
    
    const route = useRoute();

    return (
           
        <DATA.Provider value={route.params.data}>
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
                name="Profile" 
                component={ProfileScreen}
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
        </DATA.Provider>    
       
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
