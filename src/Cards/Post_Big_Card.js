import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
const Post_Big_Card = (
    {
        post_pic,
        profilepic,
        username,
        likes,
        comments,
    }
) => {
    // console.log(post_pic, profilepic, username, likes, comments)
    // console.log(comments)
    const [isliked , setIsliked] = useState(false)
    const [showcomments , setShowcomments] = useState(false)
  return (
    <View style={[styles.container]}>
        <View style={[styles.c1]}>
            <Image source={{uri : profilepic }} style={[styles.profile_pic]}/>
            <Text style={[styles.username]}>{username}</Text>
        </View>
        <Image source={{uri:post_pic}} style={[styles.image]}/>
        <View style={[styles.s2]}>
            {
                isliked?
                <View style={[styles.s21]}>
                <Icon name="heart" size={24} color="black" style={[styles.iconliked]} onPress={() => {
                    setIsliked(false)
                }}/>
                <Text style={[styles.liked]}>{likes.length + 1}</Text>
            </View>
                :
                <View style={[styles.s21]}>
                    <Icon name="heart-o" size={24} color="black" style={[styles.icon1]} onPress={() => {
                        setIsliked(true)
                    }}/>
                    <Text style={[styles.notliked]}>{likes.length}</Text>
                </View>
            }

            <View style={[styles.s22]}>
            <Icon name="comment" size={24} color="black" style={[styles.icon1]} onPress={() => {
                setShowcomments(!showcomments)
                // Alert.alert("ok")
            }}/>
            </View>
        </View>

        {
            showcomments == true && 
            <View style={[styles.s3]}>
                {
                    comments.map((item, index) => {
                        return(
                            <View style={styles.s31} key={item.id}>
                                <Text style={styles.commentuser}>{item.username}</Text>
                                <Text style={styles.commenttext}>{item.comment}</Text>
                            </View>

                        )
                    })
                }
            </View>
        }
      
    </View>
  )
}

export default Post_Big_Card

const styles = StyleSheet.create({

    container:{
        width:"100%",
        // height:300,
        backgroundColor:'white',
        marginVertical:10,
        borderRadius:10,
        overflow:'hidden',
        borderColor:'white',
        borderWidth:1,
    },
    c1:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        backgroundColor:'black',
    },
    profile_pic:{
        width:30,
        height:30,
        borderRadius:30,
        borderColor:'white',
        borderWidth:1,
    },
    username:{
        color:'white',
        marginLeft:10,
        fontSize:17,

        
        fontWeight:'bold',
        backgroundColor:''
    },
    image:{
        width:'100%',
        aspectRatio:1,
    },
    icon1:{
        color:'white',
        fontSize:30,
    },
    s2:{
        width:'100%',
        flexDirection:'row',
        backgroundColor:'black',
        alignItems:'center',
    },
    s21:{
        // width:'100%',
        flexDirection:'row',
        // backgroundColor:'black',
        alignItems:'center',
    },
    notliked:{
        color:'grey',
        marginLeft:5,
        fontSize:25,
    },
    liked : {
        color:'#DC143C',
        marginLeft:5,
        fontSize:25,
    },
    iconliked:{
        color:'#DC143C',
        fontSize:25,
    },
    s22:{
      marginLeft:20,
    },
    s3:{
       width:'100%',
       backgroundColor: '#111111',
       padding:10,
    },
    commentuser:{
        color:'white',
        fontSize:17,
        fontWeight:'bold'
    },
    commenttext:{
        color:'grey',
        fontSize:17,
        marginLeft:5,
    },
    s31:{
      flexDirection:'row',
      alignItems:'center',
      marginVertical:5,
    }

})