import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { Icon } from 'react-native-elements'

class Home extends Component {

     constructor(props) {
        super(props)
       
    }
    
    render(){
        return (
            <View> 
            <ScrollView> 
            <View style={{flex: 1}}>
               <Text> 
                    Home
                </Text> 
                <View style={{flex: 2}}>
                <Image style={{flex: 1, width: 150, height: 100, borderRadius: 8}} source={{uri: this.props.photo}} />
                </View>
            </View>
     </ScrollView>
    
    </View>
           
        )
    }
} 

export default Home