import { View,Image,StyleSheet } from 'react-native';
import AppText from '../AppText/AppText';
import color from '../../config/Colors';
function Card({title,subTitle,image})
{
    return (
        <View style={styles.Card}>
            <Image source={image} style = {styles.Image}/>
            <View style={styles.detailContainer}>
                <AppText style={styles.Text}>{title}</AppText>
                <AppText style ={styles.SubText}>{subTitle}</AppText>
            </View>
        </View>
    );

}

export default Card;

const styles = StyleSheet.create({
    Card:{
        borderRadius:30,
        backgroundColor: color.white,
        marginBottom:20,
        width:"100%",
        overflow: "hidden",
 
    },
    SubText:{
        color: color.secondary,
        fontWeight:"bold"
    },
    detailContainer: {padding:20},
    Image: {
        width:"100%",
        height:200,
        
    },
    Text:{
        marginBottom:7,
    }
})