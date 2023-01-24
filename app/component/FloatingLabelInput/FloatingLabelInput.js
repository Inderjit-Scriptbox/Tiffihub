import React,{useState,useRef,useEffect} from 'react';
import {View, StyleSheet,TextInput,Animated,Text} from 'react-native';
import Colors from '../../config/Colors';
import AppText from '../AppText/AppText';


const FloatingLabelInput = ({label}) => {

    const [value,setValue] = useState("");
    const [isFocused,setFocused] = useState(false); 


    const handleFocus = () => {
        setFocused(true);
    }

    const handleBlur = () => {
        setFocused(false);
    }

    const handleChange = ({newText}) => {
        setValue(newText);
    }

    const translation = useRef(new Animated.Value(value === "" ? 0 : 1)).current;
  
    useEffect(() => {
      Animated.timing(translation, {
        toValue: (isFocused || value !== "") ?1:0,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }, []);

   
    


   

    return (
        <View style={{borderWidth:2,borderColor: Colors.primary,borderRadius:10,margin:5,padding:5,paddingHorizontal:10}}>
            
            <Animated.Text style={{positon:"absolute",left:0,
            top:translation.interpolate({
                inputRange: [0, 1],
                outputRange: [18,0]
            }),
            fontSize:translation.interpolate({
                inputRange: [0,1],
                outputRange: [20,14]
            }),
            color:translation.interpolate({
                inputRange: [0,1],
                outputRange: [Colors.medium,Colors.primary]
            }),
            }}>
                {label} {isFocused?"focused":"unfocused"}
            </Animated.Text>

            <TextInput
                value={value}
                onChangeText = {handleChange}
                style={{fontSize:20,height:26,color:Colors.secondary}}
                onFocus={handleFocus}
                onBlur={handleBlur}
                blurOnSubmit
             />

        </View>
    );
}

// class FloatingLabelInput extends Component {
//     state = {
//       isFocused: false,
//     };
    
//     handleFocus = () => this.setState({ isFocused: true });
//     handleBlur = () => this.setState({ isFocused: false });


//     componentWillMount() {
//   this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
// }

// componentDidUpdate() {
//   Animated.timing(this._animatedIsFocused, {
//     toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
//     duration: 200,
//   }).start();
// }
  
//     render() {
//       const { label, ...props } = this.props;
//       const labelStyle = {
//         position: 'absolute',
//         left: 0,
//         top: this._animatedIsFocused.interpolate({
//           inputRange: [0, 1],
//           outputRange: [18, 0],
//         }),
//         fontSize: this._animatedIsFocused.interpolate({
//           inputRange: [0, 1],
//           outputRange: [20, 14],
//         }),
//         color: this._animatedIsFocused.interpolate({
//           inputRange: [0, 1],
//           outputRange: ['#aaa', '#000'],
//         }),
//       };
//       return (
//         <View style={{ paddingTop: 18 }}>
//           <Animated.Text style={labelStyle}>
//             {label}
//           </Animated.Text>
//           <TextInput
//             {...props}
//             style={{ height: 26, fontSize: 20, color: '#000', borderBottomWidth: 1, borderBottomColor: '#555' }}
//             onFocus={this.handleFocus}
//             onBlur={this.handleBlur}
//             blurOnSubmit
//           />
//         </View>
//       );
//     }
//   }
  
const styles = StyleSheet.create({})

export default FloatingLabelInput;
