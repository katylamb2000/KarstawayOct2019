import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'

class VideoPage extends Component {
    render(){
        return(
            <ScrollView>
            <VideoPlayer
            videoProps={{
              shouldPlay: true,
              
              resizeMode: Video.RESIZE_MODE_COVER,
              source: {
                uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              },
            }}
            inFullscreen={true}
            width={200}
            height={200}
          />
        

        <View>  
            <Text> Teacher Bobby</Text>
            
        </View>
        <View>  
            <Text> Lets learn about hiking</Text>
            
        </View>

        <Button> schedule a class with Bobby </Button>
        </ScrollView>
        )
    }}

        export default VideoPage