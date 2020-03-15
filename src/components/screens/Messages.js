import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, Button } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { Card, Avatar } from 'react-native-elements'
import NewMessage from './NewMessage'


class Messages extends Component {

     constructor(props) {
        super(props)
        this.state = {
            reply: false
        }
       
    }
    componentWillMount(){
        this.setState({
            sender: this.props.message.sender
        })
    }


    ReplyToMessage(){
        this.setState({
            ReplyToMessage: !this.state.ReplyToMessage
        })
    }

  

    // ReplyToMessage = () => {
    //     console.log(this.props.message.owner, this.props.message)
    // }
    
    render(){
        console.log("SENDER", this.props.message.sender )
        return(
            <Card >
  {/* You need to update the schema to get imageURI from owner.  */}
  {/* image={{uri: this.props.message.owner.avatar}}      */}
                  <View >
                      <Avatar source={{uri: this.state.sender.avatar}}/>
                    <Text> From {this.state.sender.name}</Text>
                    <Text >{this.props.message.body}</Text>
                  {this.state.ReplyToMessage ? (
                      <NewMessage recipient={this.props.message.sender} sender={this.props.sender} ReplyToMessage={() => this.ReplyToMessage()}/>) : 
                    <Button onPress={() => ( 
          this.ReplyToMessage()
                    )}  title='Reply'/>  }
                  </View>
               
     
            
          </Card>
          
          
        )
    }
} 

export default Messages