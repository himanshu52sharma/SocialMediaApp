import { StyleSheet, Text, TouchableOpacity, View, Image,TextInput, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import logo from '../../../../assets/logo.png'

const Signup_Chooseusername = ({navigation, route}) => {
  const {email} = route.params
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const handleUsername = () => {
       if (username == '') {
          alert('Please enter username')
       }
       else {
          setLoading(true)
        fetch('http://192.168.1.36:3000/changeusername', {
          method: 'post',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email:email,
              username: username
          })
        })
        .then(res => res.json()).then(
          data => {
              if (data.message === "Username Available") {
                  setLoading(false)
                  alert('Username has been set successfully');
                  navigation.navigate
                  ('Signup_ChoosePassword',{
                      email:email,
                      username: username
                  })
              }
              else  {
                setLoading(false)
                alert('Username already exists')
          }
        }
       )
         
          
       }

    //navigation.navigate('Signup_ChoosePassword')
  }

  return (
    <View style={[styles.containerFull]}>
      <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={[styles.goback]}>
        {/* <AntDesign name="back" size={24} color="grey" /> */}
        <Icon name="arrow-left" size={24} color="grey" />

        <Text style={{
          color:'grey',
          fontSize:16,
          marginLeft:5,
          fontWeight:'bold',
        }}>Go Back</Text>
      </TouchableOpacity>
   
      <Image source={logo} style={[styles.logo1]}/>
      <Text style={[styles.formHead2]}>Choose a Username</Text>
      <TextInput placeholder='Enter a username' style={[styles.formInput]}
      onChangeText={(text)=> setUsername(text)}
      />
      {
        loading ? <ActivityIndicator/>:
        <Text style={[styles.formbtn]}
      onPress={ () => handleUsername()}>
        Next </Text>
      }
    </View>
  )
}

export default Signup_Chooseusername

const styles = StyleSheet.create({
  containerFull:{
      width:'100%',
      height:'100%',
      backgroundColor:'black',
      alignItems:'center',
      justifyContent:'center'
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