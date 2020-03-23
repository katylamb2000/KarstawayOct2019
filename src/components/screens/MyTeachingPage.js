import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Card } from 'react-native-elements';

import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import {connect} from 'react-redux'
import videoOptions from '../../../s3-videoOptions'
import { createTeacherIntroductionVideo } from '../../graphql/mutations'
import { RNS3 } from 'react-native-aws3'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../../../aws-exports';
import { coursesByTeacher } from '../../graphql/queries';

API.configure(awsmobile)  

class MyTeachingPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
                open: false,
                date: ''
               
        }
    }



    updateTitle(text){
       
        this.setState({
            title: text
            
        })
    }

    updateDescription(text){
       
        this.setState({
            description: text
            
        })
    }

   componentWillMount(){

    this.props.teacher.SwitchToTeachingReducer.map(teacher => {
        this.setState({
            teacher: teacher
        })
        
    })
}

componentDidMount(){
    this.getCourses()
}

openEditCourseForm(course){
    console.log("course on MTP", course)
    this.props.navigation.navigate('EditCourseForm', {course: course})
}

getCourses = async() => {
    const id = this.state.teacher.id
    console.log(id)
    try {
        const course = await API.graphql(graphqlOperation(coursesByTeacher, { teacherID: id }))
         console.log('got course!!!!', course.data.coursesByTeacher)
         this.setState({
             course: course.data.coursesByTeacher.items
           })
       }

      catch (err) {
       console.log('error getting course: ', err)
     }
   }

openNewCourseForm(){
    this.props.navigation.navigate('NewCourseForm')
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

      submitVideo = async () => {
 
        const  {  videoLocationFromAWS, title, description  } = this.state
        const teacherID = this.state.teacher.id
        const video = await API.graphql(graphqlOperation(createTeacherIntroductionVideo, { input: {url: videoLocationFromAWS, teacherID: teacherID, title:title, description: description }  }))
           console.log('details to be updated!', video)
    }
    
    
        addIntroductionVideo = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1
        });
    this.setState({
        result: result,
        video: result.uri
    })
    console.log("video in state", this.state.video)
       this.uploadVideo()
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      }

      uploadVideo = async () => {
        const name = new Date().getUTCMilliseconds();
        const file = {
            uri: this.state.video,
            height: 100,
            name: name + 'video.mp4',
            // name: name + 'video.mov',
            type: 'video/mp4'
        }
        //  const { result } = this.state
        console.log("Video in uploadFile", file)
        RNS3.put(file, videoOptions).then( response=> {
            console.log('response is!!!!', response.body.postResponse.location)
            this.setState({
                videoLocationFromAWS: response.body.postResponse.location
            })
        } )
    }
    
    render(){
        // console.log(this.props.navigation.state.params.photo)
        console.log("Props on my teaching page", this.props.teacher.teacherSelectedReducer, "ID STATE ON my teaching PAGE", this.state.teacher.courses) 
        return (
    
        <ScrollView>
           <View style={{flex: 1}}>
        
         <View style={{ alignContent: 'center' }}> 
         <Image source={{uri: this.state.teacher.teacherAvatar}} style={{height: 300, width: 100 + '%'}} ></Image>

     
         {/* <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8l5J4VGGtVN3QaLP6xvaU93w5_IOJA91Zy3fiTvWgCfgZPkQJ&s' }} style={{height: 300, width: 100 + '%'}} ></Image> */}
         <Text style={{fontSize: 34,  color: 'black', marginLeft: 15}}> 
         {this.state.teacher.teacherName}
  {/* {this.props.postOwner.postOwner.owner} */}
         
         </Text>
        </View>
        
        <View style={{ justifyContent: 'center'}}>

        <Text style={{marginLeft: 15, marginRight: 15}} > {this.state.teacher.nationality} </Text>  
        <Text style={{marginLeft: 15, marginRight: 15}} > {this.state.teacher.teacherBio} </Text>        
      
        </View> 
    
        <View style={{ flexDirection: 'colomn', justifyContent: 'space-evenly', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => (this.openBookingForm())} style={{marginTop: 10, marginleft: 10}}>
            <View style={{marginLeft: 10, height: 30, width: 280, backgroundColor: '#d500f9', borderRadius: 8, alignItems: 'center', justifyContent: 'center'}}>
                 <Text style={{color: 'white', fontWeight: 'bold'}}> 
                  Set Class availability
                 </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => (this.addIntroductionVideo())} style={{marginTop: 10, marginleft: 10}}>
            <View style={{marginLeft: 10, height: 30, width: 280, backgroundColor: '#d500f9', borderRadius: 8, alignItems: 'center', justifyContent: 'center'}}>
                 <Text style={{color: 'white', fontWeight: 'bold'}}> 
                  Add Introduction video
                 </Text>

         
            </View>


        </TouchableOpacity>


        <TouchableOpacity onPress={() => (this.openNewCourseForm())} style={{marginTop: 10, marginleft: 10}}>
            <View style={{marginLeft: 10, height: 30, width: 280, backgroundColor: '#d500f9', borderRadius: 8, alignItems: 'center', justifyContent: 'center'}}>
                 <Text style={{color: 'white', fontWeight: 'bold'}}> 
                 Create new course
                 </Text>

         
            </View>


        </TouchableOpacity>
        </View>
        {this.state.result? 
<View> 
<TextInput value={this.state.title} onChangeText={text => this.updateTitle(text)} placeholder='Title' style={{width: 300, height: 50, backgroundColor:  'white', borderBottomColor: '#311B92'}} />
<TextInput value={this.state.description} onChangeText={text => this.updateDescription(text)} placeholder='Description' style={{width: 300, height: 50, backgroundColor:  'white', borderBottomColor: '#311B92'}} />
       
</View>

: null }

    </View>

    {this.state.videoLocationFromAWS ?
        <TouchableOpacity onPress={() => (this.submitVideo())} style={{marginTop: 10, marginleft: 10}}>
            <View style={{marginLeft: 10, height: 30, width: 120, backgroundColor: '#d500f9', borderRadius: 8, alignItems: 'center', justifyContent: 'center'}}>
                 <Text style={{color: 'white', fontWeight: 'bold'}}> 
                  Submit Video
                 </Text>
</View>
            
        </TouchableOpacity>
        : null }

{this.state.course ? this.state.course.map(course => {
    console.log(course.thumbnail)
    return(

        <Card  
        title={course.title}
        image={{uri: course.thumbnail}}
        >
       
        <Text style={{marginBottom: 10}}>
            {course.description}
        </Text> 
        <Button
        // const id = {classmate.id}
        // onPress={() => console.log(classmate)} 
    onPress={() => this.openEditCourseForm(course)} 
       buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
       title='Edit Course' />
        </Card> 
    )


})
: null }

   
 


<DateTimePicker
        isVisible={this.state.open}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          mode='datetime'
        />
        {this.state.date? 
        <Text> You have scheduled a class for {this.state.date} </Text>
        : null}


</ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyTeachingPage)
