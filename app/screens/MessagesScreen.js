import {StyleSheet ,FlatList} from 'react-native';
import React,{useState} from 'react';

import ListItem from '../component/ListItem/ListItem'
import Screen from '../component/Screen/Screen'
import ListItemSeperator from '../component/ListItemSeperator/ListItemSeperator';
import ListItemDeleteAction from '../component/LisgtItemDeleteAction/ListItemDeleteAction';

const initialMessage = [  
    {
        id: 1,
        title:"R1",
        description: "D1",
        image: require("../assets/inder.jpg")
    },
    {
        id: 2,
        title:"R2",
        description: "D2",
        image: require("../assets/inder.jpg")
    }
]


function MessagesScreen()
{
    const [messages,setMessages] = useState(initialMessage);

    const [refreshing,setRefreshing] = useState(false);

    const handleDelete = message => {
        // Delete the message from messages
        //Call the server to delete the message
        setMessages(messages.filter(m => m.id!==message.id));
    }
    return (
        <Screen>
            <FlatList
                style = {styles.FlatList}                
                data = {messages}
                keyExtractor = {messages=>messages.id.toString()}
                ItemSeparatorComponent={ListItemSeperator}
                refreshing = {refreshing}
                onRefresh = {()=>
                setMessages([{
        id: 2,
        title:"R2",
        description: "D2",
        image: require("../assets/inder.jpg")
    }])
                }
                renderItem = {
                    ({item})=> 
                    (<ListItem
                        title={item.title}
                        subTitle = {item.description}
                        image={item.image}
                        onPress = {()=>console.log(item)}
                        renderRightActions = {()=><ListItemDeleteAction
                            onPress={()=>handleDelete(item)}

                        />}
                    />)
                }              
            />
        </Screen>
        
    );

}

export default MessagesScreen;

const styles = StyleSheet.create({
    
    FlatList:
    {
        width: '100%',
        borderRadius: 25,
        color: '#000'
    }
}) 