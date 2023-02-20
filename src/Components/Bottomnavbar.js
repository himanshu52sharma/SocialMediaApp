import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


const Bottomnavbar = ({navigation, page}) => {
  console.log(page)
  return (
    <View style={[styles.container]}>
      {
        page === 'Mainpage'?
        <Icon name="home" size={24} color="black" style={[styles.activeicon1]}
       onPress={() => navigation.navigate('Mainpage')}/>
       :
       <Icon name="home" size={24} color="#99B83C" style={[styles.icon1]}
       onPress={() => navigation.navigate('Mainpage')}/>
      }


      {
        page === 'Searchuserpage'?
        <Icon name="search" size={24} color="black" style={[styles.activeicon1]}
       onPress={() => navigation.navigate('Searchuserpage')}/>
       :
       <Icon name="search" size={24} color="#99B83C" style={[styles.icon1]}
       onPress={() => navigation.navigate('Searchuserpage')}/>
      }

      {
        page === 'Notificationpage'?
        <Icon name="heart" size={24} color="black" style={[styles.activeicon1]}
       onPress={() => navigation.navigate('Notificationpage')}/>
       :
       <Icon name="heart" size={24} color="#99B83C" style={[styles.icon1]}
       onPress={() => navigation.navigate('Notificationpage')}/>
      }

      {
        page === 'Notificationpage'?
        <Icon name="user-circle" size={24} color="black" style={[styles.activeicon1]}
       onPress={() => navigation.navigate('My_Userprofile')}/>
       :
       <Icon name="user-circle" size={24} color="#99B83C" style={[styles.icon1]}
       onPress={() => navigation.navigate('My_Userprofile')}/>
      }
      

    </View>
  )
}

export default Bottomnavbar

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'#111111',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        position:'absolute',
        bottom:0,
        width:'100%',
        zIndex:100,
        borderTopWidth:1,
        paddingVertical:10,
        alignItems:'center',
    },
    icon1:{
        color:'white',
        fontSize:25,
    },
    activeicon1:{
      backgroundColor:'white',
      fontSize:25,
      borderRadius:50,
      padding:10,

    }
})