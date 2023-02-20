import { StyleSheet, Text, View, StatusBar, AsyncStorage } from 'react-native'
import React, { useEffect, useState } from 'react'
import Bottomnavbar from '../../Components/Bottomnavbar'
import Topnavbar from '../../Components/Topnavbar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'

const Mainpage = ({ navigation }) => {
const [userdata, setUserdata] = useState(null)
    useEffect(() => {
        AsyncStorage.getItem('user')
    .then(data => {
        //console.log('async userdata', data);
        setUserdata(JSON.parse(data))
    })
    .catch(err => alert(err))
    },[])
    console.log('userdata',userdata);
  return (
    <View style={[styles.containerFull]}>
      <StatusBar/>
      <Topnavbar navigation={navigation} page={"Mainpage"}/>
      <Bottomnavbar navigation={navigation} page={"Mainpage"}/>
      <FollowersRandomPost/>
    </View>
  )
}

export default Mainpage

const styles = StyleSheet.create({
  containerFull:{
      width:'100%',
      height:'100%',
      backgroundColor:'black',
      paddingVertical:50,
  },
  logo1:{
      height:70,
      resizeMode:'contain',
      marginBottom:20,
      backgroundColor:'black',
  },
  hr80:{
      width:'80%',
      height:1,
      backgroundColor:'gray',
      marginVertical:20
  },
  formHead:{
      fontSize:30,
      color:'white',
      textAlign:'center',
      fontWeight:'bold'
   },
   formInput:{
       width:'80%',
       backgroundColor:'white',
       borderRadius:10,
       marginVertical:10,
       paddingHorizontal:15,
       paddingVertical:10,
       fontSize:18
   },
   formTextLinkRight:{
      color:'grey',
      fontSize:15,
      textAlign:'right',
      width:'80%',
      marginVertical:10,
  },
  hr80:{
      width:'80%',
      height:1,
      backgroundColor:'gray',
      marginVertical:20
  },
  row:{
      flexDirection:'row',
      alignItems:'center',
      marginVertical:10
  },
  formbtn:{
      width:'80%',
      backgroundColor:'black',
      borderRadius:10,
      borderColor:'white',
      borderWidth:1,
      color:'white',
      textAlign:'center',
      marginVertical:10,
      paddingVertical:10,
      fontSize:25
  },
  formTextLinkCenter:{
      color:'grey',
      fontSize:16,
  },
  formHead2:{
    fontSize:20,
    color:'white',
    textAlign:'center',
    fontWeight:'bold'
},
  goback:{
      flexDirection:'row',
      position:'absolute',
      top:50,
      left:20,
      alignItems:'center'
  }
});