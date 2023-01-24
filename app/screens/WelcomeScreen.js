import {StatusBar,StyleSheet,View,TouchableOpacity} from 'react-native';
import AppText from '../component/AppText/AppText';
import Colors from '../config/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import {useState,useEffect,useContext} from 'react';
import {DATA} from '../screens/HomeScreen'
import { AntDesign } from '@expo/vector-icons';


const WelcomeView = () =>
{ 
  const contextData = useContext(DATA);
 
  const [Data,setData] = useState();
  const [load,setLoad] = useState(false);   


  const getApiData = async () => 
  {
      var axios = require('axios');
      var data = JSON.stringify({
        "id":contextData.id
      });
      
      var config = {
          method: 'post',
          url: 'https://tifinapi.tiffinhub.ca/tiffin_api/get_user_data_by_id',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
      };
      
      await axios(config)
      .then(function (response) 
      { 
            const object = JSON.parse(response.data);
            console.log(object);
            setData(object);
            setLoad(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  

  useEffect(()=>{
  
  getApiData();},[]); 

    return (  
      !load?
        (<View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
            <AppText style={{fontSize:28,fontWeight:"bold",color: Colors.primary,textAlign:"center"}}>Loading...</AppText>
        </View>
        )
        
        :
        
       (<View style={styles.container}>
         {/* <View style={styles.menu}>
           <MaterialIcons name="restaurant-menu" size={30} color={Colors.white} style={{alignSelf:"center",justifyContent:"center"}}/> 
         </View>
       */}
       <View style={styles.header}> 
          <TouchableOpacity style={styles.cart} onPress={()=>console.log("My Orders")}>
            <View style={{flexDirection:"row"}}>
              <AntDesign name="shoppingcart" size={22} color="black" />
              <AppText style={{color:Colors.primary,fontSize:16,fontWeight:"bold"}}> My Orders</AppText>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection:"row"}}>
          {<AppText style={{fontSize:18,fontWeight:"bold",marginStart:20,color:Colors.white}}>{"Hi, "}</AppText>}
          {Data["data"][0]["First_Name"] && <AppText style={{fontSize:18,fontWeight:"bold",color:Colors.white}}>{Data["data"][0]["First_Name"]}</AppText>}
          </View>

          {<AppText style={{fontSize:20,fontWeight:"bold",marginHorizontal:20,color:Colors.white,fontFamily:"monospace"}}>{"Welcome to TiffinHub"}</AppText>}

       </View>
       <View>

       </View>

       </View>)  
       
      
      );
}

export default WelcomeView;

const styles = StyleSheet.create({
  container: {flex:1,   
  },
  header:{
    width:"100%", 
    padding:10,
    paddingVertical:20,
    backgroundColor:Colors.primary,
   
     
  },
  menu:{
   
      flex: 1,
      position: "absolute",
      bottom: 0,
      margin: 20,
      height:50,
      width:50,
      padding:5,
      alignItems: 'center',
       justifyContent: 'center',         
      borderRadius:20,
      marginTop:StatusBar.currentHeight,
      backgroundColor:Colors.primary
     
  },
  cart:{
      position: "absolute",
      flexDirection:"row",
      padding:5,
      alignItems: 'center',
      justifyContent: 'center',         
      borderRadius:10,
      margin: 10,
      right:2,
      alignSelf:"flex-end",
     
      backgroundColor:Colors.white
  }
  
 })