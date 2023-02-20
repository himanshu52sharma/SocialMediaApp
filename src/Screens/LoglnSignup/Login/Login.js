import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import logo from '../../../../assets/logo.png'
 import { containerFull, hr80, logo1 } from '../../../CommonCSS/pagecss'
import { formbtn, formHead, formInput, formTextLinkCenter, formTextLinkRight } from '../../../CommonCSS/formcss'


const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState('')

  const handleLogin = () => {
    if (password == '' || confirmpassword == '') {
      alert('Please enter password')
    }
    else {
      setLoading(true)
    //   fetch('http://192.168.1.36:3000/signup', {
    //     method: 'post',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         email:email,
    //         username: username,
    //         password:password
    //     })
    //   })
    //   .then(res => res.json()).then(
    //     data => {
    //         if (data.message === "User Registered Successfully") {
    //             setLoading(false)
    //             alert(data.message);
    //             navigation.navigate
    //             ('Mainpage')
    //         }
    //         else  {
    //           setLoading(false)
    //           alert('Please try again');
    //     }
    //   }
    //  )
    }
    // navigation.navigate('Signup_Accountcreated')
  }
  return (
    <View style={containerFull}>
      <Image source={logo} style={logo1}/>
      <Text style={formHead}>Login</Text>
      <TextInput placeholder='Enter Your Email' style={formInput}
      onChangeText={(text) => setEmail(text)}
      />
      <TextInput placeholder='Enter Your Password' style={formInput}
      secureTextEntry={true}
      onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={ () => navigation.navigate('ForgotPassword_Enteremail')}>
        <Text style={formTextLinkRight}>
        Forgot Password?</Text>
        </TouchableOpacity>

        {
      loading ? <ActivityIndicator size={"large"} color={'white'} />:
      <Text style={[styles.formbtn]}
      onPress={ () => handleLogin()}>
       Submit </Text>
     }
        <View style={hr80}></View>
        <Text style={formTextLinkCenter}>
          Don't have  account? <Text style={{color:'white'}}
      onPress={ () => navigation.navigate('Signup_EnterEmail')}>
         Signup</Text>
        </Text>
    </View>
    
  )
}

export default Login

const styles = StyleSheet.create({

})