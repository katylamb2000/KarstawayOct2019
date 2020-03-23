import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, Button } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux'
import { SearchBar, Badge } from 'react-native-elements';
import  Messages  from './Messages'
import { createProfilePicture } from '../../graphql/mutations'
import { createPost } from '../../graphql/mutations'
import { createVideo } from '../../graphql/mutations'
import { byStudent } from '../../graphql/queries'
import { byOwner } from '../../graphql/queries'
import options from '../../../s3-options';
import videoOptions from '../../../s3-videoOptions'

import { RNS3 } from 'react-native-aws3'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../../../aws-exports';
import NewCompanyForm from './NewCompanyForm';
API.configure(awsmobile)      


class UserProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showMessages: false,
            messages: [],
            sentBY: "",
            studentProfileID: null,
            reply: false,
            isAVideo: false
        }
    }

    showMessages(){
        this.setState({
            showMessages: !this.state.showMessages
        })
    }

    showMessagesNumber = async() => {
        const studentID = this.state.id

        console.log("studentID", studentID)
        messages = await API.graphql(graphqlOperation(byStudent, {studentProfileID: studentID}))
        this.setState({
            messages: messages.data.byStudent.items
        })
        console.log("How many messages?", this.state.messages.length)
      }

    addACompany() {
        this.setState({
            addACompany: true
        })
    }

    updateText(bio){
       
        this.setState({
            bio: bio
        })
    }

    updatePicture(uri){
       
        this.setState({
            avatar: uri
        })
    }

    updateName(name){
       
        this.setState({
            name: name
        })
    }

    submit = async () => {
 
        const  { name, locationFromAWS, id } = this.state
     
        const post = await API.graphql(graphqlOperation(createPost, { input: {name: name, url: locationFromAWS, studentProfileID: id, isAVideo: false}  }))
           console.log('details to be updated!', post)
        // this.props.userReceived(user)
        // this.setState({post: [student.data.createStudentProfile]})
        // this.props.studentProfileRecieved(this.state.student)
   
        // console.log("THIS IS STUDENT IN USER DETAILS>", student)
    // this.props.navigation.navigate('main')


    
            console.log('error:', err)

    }

    submitVideo = async () => {
 
        const  { name, videoLocationFromAWS, id  } = this.state
     
        const video = await API.graphql(graphqlOperation(createPost, { input: {url: videoLocationFromAWS, studentProfileID: id, isAVideo: true, name: name }  }))
           console.log('details to be updated!', video)
    }
  

    componentWillMount(){
        console.log("CPM!!!!!!!!", this.props.student)
        this.props.student.map(s=> {
            this.setState({
                name: s.name,
                avatar: s.avatar,
                bio: s.bio,
                id: s.id
            })
        })
        
        
            
    }

    componentDidMount() {
        this.showMessagesNumber();
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

      _pickVideo = async () => {
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
    console.log("Image in state", this.state.description)
       this.uploadVideo()
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      }
    
      _pickImage = async () => {
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
    console.log("Image in state", this.state.description)
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
            name: name + ".jpg",
            type: 'image/jpg'

        }
        //  const { result } = this.state
          console.log("Image in uploadFilke", file)
        RNS3.put(file, options).then( response=> {
            console.log('response is!!!!', response.body.postResponse.location)
            this.setState({
                locationFromAWS: response.body.postResponse.location
            })
        } )
    }

    uploadVideo = async () => {
        const name = new Date().getUTCMilliseconds();
        const file = {
            uri: this.state.image,
            height: 100,
            name: name + 'video.mp4',
            // name: name + 'video.mov',
            type: 'video/mp4'
        }
        //  const { result } = this.state
        console.log("Video in uploadFilke", file)
        RNS3.put(file, videoOptions).then( response=> {
            console.log('response is!!!!', response.body.postResponse.location)
            this.setState({
                videoLocationFromAWS: response.body.postResponse.location
            })
        } )
    }


    render(){
console.log(this.state.student)
    
     
        return (
         

            <View style={{flex: 1}}>
<ScrollView>
<View 
    style={{
        height: 100 + '%',
        width: 100 + '%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    }}> 
    <View style={{flexDirection: 'row', width: 100 + "%"}}> 
    

   <View style={{flex: 3,height: 100,  justifyContent: 'center', alignItems: 'center '}}>
 

 
        <Image style={{ width: 80, height: 80, borderRadius: 40}} source={{uri: this.state.avatar}} />  
  
        <Text> {this.state.name} </Text>
        <Text> {this.state.bio} </Text> 
    
        </View> 
    
        <View style ={{flex: 7,height: 100}}>
            <View style={{flexDirection: 'row', flex: 1}}> 
                <View style={{flexDirection: 'column', flex: 1}}>

                    
                    <TouchableOpacity onPress={() => this.showMessages()}>
                    <Text> 
                         messages
                     </Text>
                     <Badge value={<Text>{this.state.messages.length}</Text>} />
                     {/* <Text> </Text>  */}
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'column', flex: 1 }}> 
                <Text>Goals </Text> 
                    <Text>18 </Text> 
                  
                </View>

                <View style={{flexDirection: 'column', flex: 1}}> 
                <Text>Badges </Text> 
                    <Text>77 </Text> 
                </View>

             

            </View>

            <View style={{flexDirection: 'column', flex: 1}}> 
                    <TouchableOpacity onPress={this._pickImage}>
                        <Text> Add a photo </Text>
                    </TouchableOpacity>
            </View>

            <View> 
                    {this.state.videoLocationFromAWS? 
                    <TouchableOpacity onPress={() => this.submitVideo()}>
                        <Text> Submit Video </Text>
                    </TouchableOpacity> : null }
                </View>

            <View style={{flexDirection: 'column', flex: 1}}> 
                    <TouchableOpacity onPress={this._pickVideo}>
                        <Text> Add a video </Text>
                    </TouchableOpacity>
            </View>

            <View> 
                    {this.state.locationFromAWS? 
                    <TouchableOpacity onPress={() => this.submit()}>
                        <Text> Submit Picture </Text>
                    </TouchableOpacity> : null }
                </View>
        </View> 
    </View>
  


  
  
  
    <ScrollView> 

    {this.state.showMessages? this.state.messages.map(message => {
return(
    <Messages message={message} sender={this.state.student}/> 
    )
  })
: null 



}
</ScrollView>
</View>
   

{this.state.company? (
    <View>
    
    <Text>Switch to {this.state.companyName} </Text> 
    </View>  
    ) : null

  

 }
<View> 
{this.state.addACompany? (



<NewCompanyForm /> ) : null

    
}
</View>
        

         </ScrollView>


    

</View>

           
        )
 
    // }
        
    //     )
} 
}

const mapStateToProps = state => {
    return {
        student: state.studentProfileReducer.student
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // studentProfileReceived: student => dispatch(actions.studentProfileReceived(student))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)