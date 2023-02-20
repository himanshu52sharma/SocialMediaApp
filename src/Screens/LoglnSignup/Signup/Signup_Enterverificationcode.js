import { StyleSheet, Text, TouchableOpacity, View, Image,TextInput } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import logo from '../../../../assets/logo.png'

const Signup_Enterverificationcode = ({navigation, route }) => {
    const {useremail, userVerificationCode} = route.params
    console.log(useremail, userVerificationCode);

    const[verificationCode, setVerificatioCode] = useState('')

    const handleVerificationCode = () => {
        if (verificationCode != userVerificationCode) {
          alert('Invalid Verification Code')
        }
        else if (verificationCode == userVerificationCode){
           alert('Verified Successfully')
            navigation.navigate('Signup_Chooseusername',{
              email:useremail})
        }
        else{
          alert('Please try Again')
        }
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
      <Text style={[styles.formHead3]}>A verification code has been sent to Your
      email</Text>
      <TextInput placeholder='Enter 6-Digit Code here' style={[styles.formInput]}
      
      onChangeText = {(text) => setVerificatioCode(text)}
      />
      <Text style={[styles.formbtn]}
      onPress={ () => handleVerificationCode()}>
        Next </Text>
    </View>
  )
}

export default Signup_Enterverificationcode

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
  formHead3:{
    fontSize:20,
    color:'grey',
    textAlign:'center',
    formWeight:'400',
    padding:10,
    borderRadius:10,
    width:'80%',
    marginVertical:10,
},
  goback:{
      flexDirection:'row',
      position:'absolute',
      top:50,
      left:20,
      alignItems:'center'
  }
});