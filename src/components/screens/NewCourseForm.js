import React, { Component } from 'react'
import { View, Picker, StyleSheet, Text, TouchableOpacity, Button, TextInput, ActivityIndicator, Image } from 'react-native'
import axios from 'axios'
import { createUser } from '../../graphql/mutations'
import { Auth } from 'aws-amplify'
import actions from "../../redux/actions";
import { connect } from "react-redux";
import options from '../../../s3-options';
import { RNS3 } from 'react-native-aws3'
import * as ImagePicker from 'expo-image-picker';
import { createCourse } from "../../graphql/mutations"
import { API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../../../aws-exports';
API.configure(awsmobile)      

class NewCourseForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            teacher: ''
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
        console.log('hi');
      }
    
      getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      }
    
      selectThumbnail = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1
        });
    this.setState({
        result: result,
        image: result.uri
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

createCourse = async () => {
              
        const { title, description, thumbnail, level } = this.state
        const teacherID = this.state.teacher.id
            try {
               const course = await API.graphql(graphqlOperation(createCourse, { input: {level: level, title: title, description: description, teacherID: teacherID, thumbnail: thumbnail }}))
                console.log('new course!!!!', course.data.createCourse)
                this.setState({
                    course: course.data.createCourse
                  })
              }

             catch (err) {
              console.log('error signing up teacher: ', err)
            }
          }

    render(){
        console.log("trying to get Teacher ID" , this.state.teacher.id, this.state.teacher)
        const { thumbnail } = this.state
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContner: 'center', paddingTop: 150}}>
   
   <View style={{flex: 1, alignItems: "center", alignContent: "center", justifyContent: "space-between", flexDirection: "column"}}>       
 
   
    <View> 
        <TextInput name='title' value={this.state.title} onChangeText={(text) => this.handleChangeTitle(text)} placeholder="Course Title" style={{width: 300, height: 50, backgroundColor:  'white', borderBottomColor: '#311B92', borderBottomWidth: 3 }} />
        <TextInput name='description' value={this.state.description} onChangeText={(text) => this.handleChangeDescription(text)} placeholder='Course Description' style={{width: 300, height: 50, backgroundColor:  'white', borderBottomColor: '#311B92', borderBottomWidth: 3}} />
    </View>
    <View> 
    <Picker selectedValue={this.state.level}
                style={{width: 100}} onValueChange={(itemValue, itemIndex) =>
                this.setState({level: itemValue})} >
            <Picker.Item label="begginner" value="beginner" />
            <Picker.Item label="intemdiate" value="intemediate" />
            <Picker.Item label="advanced" value="advanced" />
        </Picker>
    </View>
    <View style={{flex: 2 }}>
            <Button onPress={() => ( 
          this.selectThumbnail()
      )}  title='select course thumbnail'/> 
        {thumbnail &&
          <Image source={{ uri: thumbnail }} style={{ width: 200, height: 200 }} />}
          </View> 

          {this.state.thumbnail ? 


 
    <Button onPress={() => ( 
            this.createCourse()
        )}  
        title='SUBMIT'/>  
     : 
<View> 
      <ActivityIndicator size="large" color="#0000ff" />
     <Text> Uploading... </Text> 
</View>    

        }     
</View>

{this.state.course ? 
   
this.props.navigation.navigate('MyTeachingPage')
: 
null
}

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
  
  export default connect(mapStateToProps, mapDispatchToProps)(NewCourseForm);