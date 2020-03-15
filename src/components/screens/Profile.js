import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { Auth } from 'aws-amplify';



class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
                open: false,
                date: ''
               
        }
    }
 
    openBookingForm(){
        this.setState({
            open: true
        })
    }

    hideDateTimePicker = (datetime) => {
        this.setState({ 
            open: false,
            date: moment(datetime).format('MMMM Do YYYY HH:mm')
    });
      };
     
      handleDatePicked = date => {
        //   this.setState({
        //       date: date
        //   })
        console.log("A date has been picked: ", date);

        this.hideDateTimePicker();
      };
    
    render(){
        // console.log(this.props.navigation.state.params.photo)
        console.log(this.props)
        return (
            <View style={{flex: 1}}>

<VideoPlayer
  videoProps={{
    shouldPlay: false,
    
    resizeMode: Video.RESIZE_MODE_COVER,
    source: {
      uri: 'https://londonkarstway.s3.eu-west-2.amazonaws.com/Videos/Raising+a+Reader+_+How+to+Read+to+Children+_+AD.mp4',
    },
  }}
//   inFullscreen={true}
  width={400}
    height={200}
/>

<VideoPlayer
  videoProps={{
    shouldPlay: false,
    
    resizeMode: Video.RESIZE_MODE_COVER,
    source: {
      uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
  }}
  
  width={400}
  height={200}
 
/>
<ScrollView>

<TouchableOpacity>
         <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, paddingTop: 30}}> 
            <Image style={{height: 100, width: 200}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGH0KNZcXMe4TXn6rznRnTZOjJMS4ES-odYGuWiAABUrOc4O4nAQ&s'}}/>
            <View style={{flexDirection: 'colum', height: 100, width: 100, flex: 1, flexWrap: 'wrap'}}> 
            <Text style={{fontWeight: 'bold', paddingLeft: 5}}>What is your morning routine?  </Text>
            <Text style={{ paddingLeft: 5}}>**** 589 </Text>
            </View>
         </View>
         </TouchableOpacity>

         <TouchableOpacity>
         <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, paddingTop: 30}}> 
            <Image style={{height: 100, width: 200}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGH0KNZcXMe4TXn6rznRnTZOjJMS4ES-odYGuWiAABUrOc4O4nAQ&s'}}/>
            <View style={{flexDirection: 'colum', height: 100, width: 100, flex: 1, flexWrap: 'wrap'}}> 
            <Text style={{fontWeight: 'bold', paddingLeft: 5}}>What is your morning routine?  </Text>
            <Text style={{ paddingLeft: 5}}>**** 589 </Text>
            </View>
         </View>
         </TouchableOpacity>

<TouchableOpacity>
         <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, paddingTop: 30}}> 
            <Image style={{height: 100, width: 200}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGH0KNZcXMe4TXn6rznRnTZOjJMS4ES-odYGuWiAABUrOc4O4nAQ&s'}}/>
            <View style={{flexDirection: 'colum', height: 100, width: 100, flex: 1, flexWrap: 'wrap'}}> 
            <Text style={{fontWeight: 'bold', paddingLeft: 5}}>What is your morning routine?  </Text>
            <Text style={{ paddingLeft: 5}}>**** 589 </Text>
            </View>
         </View>
         </TouchableOpacity>

         <TouchableOpacity>
         <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, paddingTop: 30}}> 
            <Image style={{height: 100, width: 200}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGH0KNZcXMe4TXn6rznRnTZOjJMS4ES-odYGuWiAABUrOc4O4nAQ&s'}}/>
            <View style={{flexDirection: 'colum', height: 100, width: 100, flex: 1, flexWrap: 'wrap'}}> 
            <Text style={{fontWeight: 'bold', paddingLeft: 5}}>What is your morning routine?  </Text>
            <Text style={{ paddingLeft: 5}}>**** 589 </Text>
            </View>
         </View>
         </TouchableOpacity>

         <TouchableOpacity>
         <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, paddingTop: 30}}> 
            <Image style={{height: 100, width: 200}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGH0KNZcXMe4TXn6rznRnTZOjJMS4ES-odYGuWiAABUrOc4O4nAQ&s'}}/>
            <View style={{flexDirection: 'colum', height: 100, width: 100, flex: 1, flexWrap: 'wrap'}}> 
            <Text style={{fontWeight: 'bold', paddingLeft: 5}}>What is your morning routine?  </Text>
            <Text style={{ paddingLeft: 5}}>**** 589 </Text>
            </View>
         </View>
         </TouchableOpacity>
        

         </ScrollView>


         

</View>
           
        )
    }
} 

export default Profile