import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, Button } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { Card, ListItem, roundAvatar } from 'react-native-elements'


class Company extends Component {

     constructor(props) {
        super(props)
       
    }
    // ReplyToMessage = () => {
    //     console.log("COMPANY!!!!"
    // }
    
    render(){
        console.log("COMPANY", this.props.company.bio )
        
        return(
     <View> 
      
      <TouchableOpacity onPress={()  => {this.props.addAProgram()}}>
    <Card>
  <View style={{flexDirection: 'row', alignItems: 'center'}}> 
          <Image style={{ width: 50, height: 50, borderRadius: 25}} source={{uri: this.props.company.logo}} />
           <Text> {this.props.company.companyName}</Text>         
    </View>  
                         
    </Card>
    </TouchableOpacity>
       
                   
                

            
           
                  
   

</View>
        )
      
    
    }}

export default Company