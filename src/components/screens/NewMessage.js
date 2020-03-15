import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, Button } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMessage } from '../../graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../../../aws-exports';
API.configure(awsmobile)  


class NewMessage extends Component {

     constructor(props) {
        super(props)
        this.state ={
            reply: false
        }
       
    }

    updateMessage(message){
        this.setState({
            message: message
        })
    }

    reply(){
        this.setState({
            reply: !this.state.reply
        })
    }
    sendMessage = async() => {        
        const recipient = this.props.recipient.id
        const sender = this.props.sender
        // const classmate = this.props.classmate.classmateSelectedReducer.id
        
        console.log("What is this:!!!", recipient)
        const { message } = this.state
        newmessage = await API.graphql(graphqlOperation(createMessage, { input:{ body: message, studentProfileID: recipient, senderID: sender}}))
        console.log(newmessage)
        
            this.setState({
                message: ""
            })
        
    }

    
    render(){
        console.log("IMAGE", this.props.message )
        return(
            <Card >
    <TouchableOpacity onPress={() => this.props.ReplyToMessage()}>
  <Icon name="times-circle" size={18} color="purple" />
  </TouchableOpacity> 
  <TextInput autoCorrect={false} value={this.state.message} onChangeText={text => this.updateMessage(text, 'uri')} placeholder="name" style={{width: 300, height: 50, backgroundColor:  'white', borderBottomColor: '#311B92', borderBottomWidth: 3 }} />

                    <Button onPress={() => ( 
          this.sendMessage()
      )}  title='Send'/>  
       
                    
          </Card>
          
          
        )
    }
} 

export default NewMessage