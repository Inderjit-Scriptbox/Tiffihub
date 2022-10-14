import {StyleSheet} from 'react-native';
import colors from '../../config/Colors'

const styles = StyleSheet.create(
    {
        Button:
        {
            backgroundColor:colors.primary,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            padding:15,
            width: '95%',
            margin:"2.5%",
            

        },
        Text: {
            color: colors.white,
            fontSize:18,
            textTransform:"uppercase",
            fontWeight:"bold"
        }
    })

export default styles