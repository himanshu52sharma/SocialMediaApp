import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import logo from '../../assets/logo.png'
import Icon from 'react-native-vector-icons/FontAwesome';

const Topnavbar = ({ navigation, page }) => {
  // console.log(page)
  return (
    <View style={[styles.container]}>
     <Image source={logo} style={[styles.logo2]}/>
     {
      page === 'Mainpage' &&
      <Icon name="wechat" size={24} color="#99B83C" style={[styles.icon1]}
     onPress={()=>navigation.navigate('All_chats')
    } />
     }

     {
      page === 'My_Userprofile' &&
      <Icon name="gear" size={24} color="#99B83C" style={[styles.icon2]}
     onPress={()=>navigation.navigate('Settings1')
    } />
     }
     
    </View>
  )
}

export default Topnavbar

const styles = StyleSheet.create({
    container:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       width:'100%',
       paddingVertical:10,
       position:'absolute',
       top:0,
       zIndex:100,
       backgroundColor:'#111111'
    },
logo2:{
    height:30,
    resizeMode:'contain',
    width:100,
},
icon1:{
    color:'white',
    fontSize:30,
},
icon2:{
  color:'white',
  fontSize:30,
  marginRight:5,
}
})