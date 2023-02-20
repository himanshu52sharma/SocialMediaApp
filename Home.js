import { StyleSheet, Button, Text, View, Image, TextInput,TouchableOpacity, ActivityIndicator, AsyncStorage } from 'react-native';
import React, { useState } from 'react';
import logo from './assets/logo.png'



const Home = ({navigation}) => {
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    if (email == '' || password == '') {
      alert('Please enter email and password')
    }
    else {
      setLoading(true)
      fetch('http://192.168.1.36:3000/signin', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email,
              password
          })
        })
        .then(res => res.json())
        .then(async data => {
                if (data.message === "Successfully Signed In") {
                    setLoading(false)
                    await AsyncStorage.setItem('user',JSON.stringify(data))
                    navigation.navigate
                    ('Mainpage',{ data })
                }
                else if (data.error) {
                    setLoading(false)
                    alert(data.error)
                }
              })
              .catch(err =>{
                setLoading(false)
                alert(err)
              })
        }
    // navigation.navigate('Signup_Accountcreated')
  }
    return (
        <View style={[styles.containerFull]}>
      <Image source={logo} style={[styles.logo1]}/>
      <Text style={[styles.formHead]}>Login</Text>
      <TextInput placeholder='Enter Your Email' style={[styles.formInput]}
      onChangeText={(text) => setEmail(text)}
      />
      <TextInput placeholder='Enter Your Password' style={[styles.formInput]}
      secureTextEntry={true}
      onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={ () => navigation.navigate('ForgotPassword_Enteremail')}>
        <Text style={[styles.formTextLinkRight]}>
        Forgot Password?</Text>
        </TouchableOpacity>
        {
      loading ? <ActivityIndicator size={"large"} color={'white'} />:
      <Text style={[styles.formbtn]}
      onPress={ () => handleLogin()}>
       Submit </Text>
     }
        <View style={[styles.hr80]}></View>
        <Text style={[styles.formTextLinkCenter]}>
          Don't have an account? <Text style={{color:'white'}}
      onPress={ () => navigation.navigate('Signup_EnterEmail')}>
         Signup</Text>
        </Text>

   
        </View>
      );
}

export default Home

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
    goback:{
        flexDirection:'row',
        position:'absolute',
        top:50,
        left:20,
        alignItems:'center'
    }
  });