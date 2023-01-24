import React,{useState} from 'react';
import {SafeAreaView, StyleSheet,StatusBar,FlatList,Platform} from 'react-native';


import NotificationItem from '../component/ListItem/NotificationItem'
import colors from '../config/Colors'


import Data from '../data/NotificationData';


const NotificationScreen = () => {
    // const data = useContext(Data);
    // console.log(data.data);
    const [data,setData] = useState(Data);
    const onSelect = (ind) =>{
        const tempData = [];
        data.map((item)=>{
            if(item.id===ind.id)
            {
                console.log(item);
                tempData.push({id:item.id,Text:item.Text,subText:item.subText,image:item.image,bool:true});
            }
            else
            {
                tempData.push(item);
            }
            
        });
        // console.log(tempData);
        setData(tempData);
    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                    data={data}
                    keyExtractor = {(item)=>item.id}
                    
                    renderItem =  {({item}) => 
                        <NotificationItem                         
                                image={item.image}
                                text={item.Text}
                                subtext={item.subText}
                                bool={item.bool}
                                onPress = {()=>onSelect(item)}
                            >                             
                            </NotificationItem>
                        }
                        
                />  
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,       
        paddingTop:10,
        backgroundColor:colors.white,  
    
   }
})

export default NotificationScreen;
