import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Chatcard = ({username,
    profile_image,
    lastmessage,
    time,
          }) => {
    // console.log(username)
  return (
    <View style={[styles.Chatcard]}>
      <Image source={{uri: profile_image}} style={[styles.image]}/>
      <View style={[styles.c1]}>
        <Text style={[styles.username]}>{username}</Text>
        <Text style={[styles.lastmessage]}>{lastmessage}</Text>
      </View>
    </View>
  )
}

export default Chatcard

const styles = StyleSheet.create({
    Chatcard:{
        width:'100%',
        // height:40,
        backgroundColor:'#111111',
        // marginVertical:10,
        marginTop:10,
        borderRadius: 20,
        padding: 10,
        flexDirection:'row',
        alignItems:'center',
    },
    image:{
        width:50,
        height:50,
        borderRadius:50,

    },
    username:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',

    },
    c1:{
        marginLeft:20
    },
    lastmessage:{
       color:'gray',
       fontSize:19, 
    }
})