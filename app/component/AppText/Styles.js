import { StyleSheet,Platform } from 'react-native'

const styles = StyleSheet.create({
    fontSize:16,
    fontFamily: Platform.OS === "android"?"Roboto":"Avenir"
})

export default styles; 