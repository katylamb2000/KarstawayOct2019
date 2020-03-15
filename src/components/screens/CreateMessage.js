import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, Button } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { Card } from 'react-native-elements'


class CreateMessage extends Component {

     constructor(props) {
        super(props)
       
    }
   
    
    render(){
        console.log("IMAGE", this.props.message.owner.avatar )
        return(
            <Card >
  {/* You need to update the schema to get imageURI from owner.  */}
  {/* image={{uri: this.props.message.owner.avatar}}      */}
                  <View >
                      <Image source={{uri: this.props.message.owner.avatar}}/>
                    <Text> From {this.props.message.owner}</Text>
                    <Text >{this.props.message.body}</Text>
                    <Text> You need to update the schema to get imageURI from owner. </Text>
                  
                    <Button onPress={() => ( 
          this.ReplyToMessage()
      )}  title='Reply'/>  
                  </View>
               
     
            
          </Card>
          
          
        )
    }
} 

export default CreateMessage