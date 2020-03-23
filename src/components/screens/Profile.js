import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { Auth } from 'aws-amplify'
import {connect} from 'react-redux'
import { introVideosByTeacher } from "../../graphql/queries"
import { API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../../../aws-exports';
API.configure(awsmobile) 


class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
                open: false,
                date: ''
               
        }
    }

    componentWillMount(){
     

      this.setState({
          teacher: this.props.teacher.teacherSelectedReducer
      })
      this.getVid()
    }

     
getVid = async() => {
  console.log("Looking for teacher id", this.state, this.props.teacher.teacherSelectedReducer.id)
        const id = this.props.teacher.teacherSelectedReducer.id
        const introVideo = await API.graphql(graphqlOperation(introVideosByTeacher, {teacherID: id}  ))
        introVideo.data.introVideosByTeacher.items.map(IV => {
          this.setState({introVideo: IV.url })
        })
        
    console.log("INTRO VIDEO!!!!", this.state.introVideo)
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
        console.log("props on the teacher profile page.", this.state.introVideo)
        return (
            <View style={{flex: 1}}>
{this.state.introVideo ?
<VideoPlayer
  videoProps={{
    shouldPlay: false,
    
    resizeMode: Video.RESIZE_MODE_COVER,
    source: {
      uri: this.state.introVideo,
    },
  }}
  width={410}
  height={400}
/>
: null }
{/* <VideoPlayer
  videoProps={{
    shouldPlay: false,
    
    resizeMode: Video.RESIZE_MODE_COVER,
    source: {
      uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
  }} */}
  
  {/* width={400}
  height={200}
 
/> */}
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

const mapStateToProps = state => {
  return {
      teacher: state
  }
}

const mapDispatchToProps = dispatch => {
  return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)