import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, Button } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { Card, Avatar } from 'react-native-elements'
import NewMessage from './NewMessage'


class Comment extends Component {

     constructor(props) {
        super(props)
        this.state = {
            reply: false
        }
       
    }
   


    ReplyToMessage(){
        this.setState({
            ReplyToMessage: !this.state.ReplyToMessage
        })
    }

    render(){
        console.log("Comments in  comment component!", this.props.comment )
        return(
            <Card >
  {/* You need to update the schema to get imageURI from owner.  */}
  {/* image={{uri: this.props.message.owner.avatar}}      */}
                  <View >
                  <Text> I will slepp when i have comments and videos</Text>
                  <Text> {this.props.comment.body} </Text>
                      {/* <Avatar source={{uri: this.state.comment.avatar}}/>
                  
                    <Text >{this.props.comment.body}</Text>
                  {/* {this.state.ReplyToMessage ? (
                      <NewMessage recipient={this.props.message.sender} sender={this.props.sender} ReplyToMessage={() => this.ReplyToMessage()}/>) : 
                    <Button onPress={() => ( 
          this.ReplyToMessage()
                    )}  title='Reply'/>  } */}
                  </View>
               
     
            
          </Card>
          
          
        )
    }
} 

export default Comment