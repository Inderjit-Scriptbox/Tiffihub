import { Platform } from 'react-native'
import Colors from './Colors'

export default {
    Colors,
    text:{
        fontSize:16,    
        color:Colors.dark,
        fontFamily:Platform.OS === "android"? "Roboto":"Avenir"
    }
}
