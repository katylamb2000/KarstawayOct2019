import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { Icon } from 'react-native-elements'

class Classroom extends Component {

   
    
    render(){
        return (
            <View> 
            <ScrollView> 
            <View style={{flex: 1}}>
               <Text> 
                    Classroom
                </Text> 
              
            </View>
     </ScrollView>
    
    </View>
           
        )
    }
} 

export default Classroom