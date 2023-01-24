import React,{useState} from 'react';
import {SafeAreaView, StyleSheet,Platform,StatusBar,FlatList} from 'react-native';

import Colors from "../config/Colors"
import AppText from "../component/AppText/AppText"

import FAQData from "../data/FAQData"
import FaqListItem from '../component/ListItem/FaqListItem';



const FaqScreen = () => {
    const [faq,setFaq] = useState(FAQData);
    // console.log(faq);

    const onSelect = (ind) =>{
        const tempData = [];
        faq.map((item)=>{
            // console.log(item);
            if(item.id===ind.id)
            {
                tempData.push({id:item.id,que:item.que,ans:item.ans,bool:!item.bool});
            }
            else
            {
                tempData.push({id:item.id,que:item.que,ans:item.ans,bool:item.bool});

            }
            
        });
        // console.log(tempData);
        setFaq(tempData);
    }
    return (
       
        <SafeAreaView style={styles.container}>            
                {/* <AppText style={styles.headText}>Frequently Asked Questions</AppText> */}
                <FlatList
                    data={faq}
                    keyExtractor = {(item)=>item.id}
                    renderItem =  {({item}) => 
                            <FaqListItem 
                              que={item.que}
                              ans={item.ans}
                              flag={item.bool}
                              onPress = {()=>onSelect(item)}
                            >                             
                            </FaqListItem>
                        }
                />
                
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container:{
         flex:1,
         backgroundColor:"#ffe4df",         
        
    },
    headText:{
        fontWeight:"600",
        fontSize:20,
        padding:15,
        alignSelf: 'center',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        backgroundColor:Colors.primary,
        color:Colors.white,
        marginBottom:10
    },
    headBar:{
        flexDirection: "column",
    }
})

export default FaqScreen;
