import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Usercard = (user, profile) => {
    // console.log('user==',user.profile)
  return (
    <View style={[styles.Usercard]}>
       <Image  source={{uri: user.profile}} style={[styles.image]}/>
      <View style={[styles.c1]}>
        <Text style={[styles.username]}>{user.user}</Text>
      </View>
    </View>
  )
}

export default Usercard

const styles = StyleSheet.create({
  Usercard:{
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
