import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Settings1 = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <Icon name="arrow-left" size={24} color="white" style={[styles.gohomeicon]}
        onPress={() =>
      {
          navigation.navigate('My_Userprofile')
      }
    }
    />
      <Text style={[styles.formHead]}>Settings</Text>


      <Text style={[styles.txt1]}>Edit Profile</Text>
      <Text style={[styles.txt1]}>Change Password</Text>
      <Text style={[styles.txt1]}>Customer Support</Text>
    </View>
  )
}

export default Settings1

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'black',
  },
  formHead:{
    fontSize:30,
    color:'white',
    textAlign:'center',
    fontWeight:'bold'
 },
txt1:{
  fontSize:20,
  color:'white',
  marginTop:20,
  borderBottomColor:'grey',
  borderBottomWidth:1,
},
})