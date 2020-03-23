import React, { Component } from 'react'
import { View, StyleSheet, Picker, Text, TouchableOpacity, Button, TextInput, ActivityIndicator, Image, ImageBackground } from 'react-native'
import axios from 'axios'
import { createUser } from '../../graphql/mutations'
import { Auth } from 'aws-amplify'
import actions from "../../redux/actions";
import { connect } from "react-redux";
import options from '../../../s3-options';
import { RNS3 } from 'react-native-aws3'
import * as ImagePicker from 'expo-image-picker';
import { createLessonVideo } from "../../graphql/mutations"
import { API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../../../aws-exports';
API.configure(awsmobile)      

class EditCourseForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            teacher: '',
            loading: false
        }
    }
    componentWillMount(){
        this.props.teacher.SwitchToTeachingReducer.map(teacher => {
            this.setState({
                teacher: teacher
            })
        })
    }

    componentDidMount() {
        this.getPermissionAsync();
        this.setState({
            course: this.props.navigation.state.params.course
        })
        console.log("COURSE NOW IN STATE", this.state.course, "THUMBNAIL", );
      }

      addAnotherLessonToThisCourse(){
          console.log("Add aanother video to this course!")
      }
    
      getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      }
    
      selectVideo = async () => {
          
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1
        });
    this.setState({
        result: result,
        image: result.uri,
        loading: true
    })
    console.log("Image in state", this.state.image)
       this.uploadFile()
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      }
    
      uploadFile = async () => {
        const name = new Date().getUTCMilliseconds();
        const file = {
            uri: this.state.image,
            height: 100,
            name: name + this.state.title + ".jpg",
            type: 'image/jpg'

        }
        //  const { result } = this.state
        console.log("Image in uploadFile", file)
        RNS3.put(file, options).then( response=> {
            console.log('response is!!!!', response.body.postResponse.location)
            this.setState({
                thumbnail: response.body.postResponse.location
            })
        } )
    }
 
handleChangeTitle(text ){
    this.setState({
        title: text
    })
    console.log(this.state)
}
handleChangeDescription(text ){

    this.setState({
        description: text
    })
    console.log(this.state)
}

createVideoLesson = async () => {
        const { title, description, thumbnail, video } = this.state
        const courseID = this.state.course.id
            try {
               const lesson = await API.graphql(graphqlOperation(createLessonVideo, { input: {title: title, description: description, courseID: courseID, thumbnail: thumbnail }}))
                console.log('new course!!!!', lesson.data.createLessonVideo)
                this.setState({
                    lesson: lesson.data.createVideoLesson
                  })
              }
             catch (err) {
              console.log('error adding new video lesson.: ', err)
            }
          }

    render(){
        console.log("trying to get Course ID from props" , "THEN FROM STATE!!!", this.state)
        const { thumbnail } = this.state
     return (
 <View style={{flex: 1, alignItems: 'center', justifyContner: 'center'}}>

   {this.state.course ?

<ImageBackground  source={{uri: this.state.course.thumbnail}} style={{height: 250, width: 100 + '%', justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}> 

 <Text style={{color: 'white', fontWeight: 'bold', fontSize: 50}}> 
 {this.state.course.title}
 </Text>
   </ImageBackground>
   : null}
<View style={{flex: 1, alignItems: "center", alignContent: "center", justifyContent: "space-between", flexDirection: "column"}}>       
 
   
    <View> 
        <TextInput name='Lesson title' value={this.state.title} onChangeText={(text) => this.handleChangeTitle(text)} placeholder="Course Title" style={{width: 300, height: 50, backgroundColor:  'white', borderBottomColor: '#311B92', borderBottomWidth: 3 }} />
        <TextInput name='Lesson description' value={this.state.description} onChangeText={(text) => this.handleChangeDescription(text)} placeholder='Course Description' style={{width: 300, height: 50, backgroundColor:  'white', borderBottomColor: '#311B92', borderBottomWidth: 3}} />
     
    </View>
  
    <View style={{flex: 2 }}>
            <Button onPress={() => ( 
          this.selectVideo()
      )}  title='select lesson video'/> 
        {thumbnail &&
          <Image source={{ uri: thumbnail }} style={{ width: 200, height: 200 }} />}
          </View> 


    <View style={{flex: 2 }}>
          {this.state.thumbnail ? 
    <Button onPress={() => ( 
            this.createVideoLesson()
        )}  
        title='SUBMIT'/>  
     : null }
    </View>


    {this.state.loading ? 
    <View> 
    <ActivityIndicator size="large" color="#0000ff" /> 
    <Text> Uploading... </Text>  
    </View> :
    null 
}
            


{this.state.lesson ? 
<View> 
<Button onPress={() => (
    this.props.navigation.navigate('myTeachingPage')
)} 
title='preview course'/>

<Button onPress={() => (
    this.addAnotherLessonToThisCourse()
)} 
title='Add another lesson to this course'
/>
</View>
: 
null
}

                </View> 
                </View> 
        )}
      
} 



const mapStateToProps = state => {
    return {
        teacher: state
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        
      
    };
  
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditCourseForm);