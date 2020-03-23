import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Button, TextInput, Image, ActivityIndicator } from 'react-native'
import { Auth } from 'aws-amplify'
import { API, graphqlOperation, Storage } from 'aws-amplify'
import PubSub from '@aws-amplify/pubsub';
import options from '../../../s3-options';
import awsmobile from '../../../aws-exports';
import { RNS3 } from 'react-native-aws3'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


API.configure(awsmobile)  


import actions from "../../redux/actions";
import { connect } from "react-redux";
// import { getUser } from "../../graphql/queries"
import { createStudentProfile} from "../../graphql/mutations"



class UserDetailsForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
                name: "",
                bio: "",
                avatar: '',
                image: null
               
             
      
        }
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
            name: name + ".jpg",
            type: 'image/jpg'

        }
        //  const { result } = this.state
          console.log("Image in uploadFilke", file)
        RNS3.put(file, options).then( response=> {
            console.log('response is!!!!', response.body.postResponse.location)
            this.setState({
                avatar: response.body.postResponse.location
            })
        } )
    }
      
  
    updateName(name){
       
        this.setState({
            name: name
            
        })
    }

    updateBio(bio){
       
        this.setState({
            bio: bio
        })
    }

    updatePicture(pic){
       
        this.setState({
            avatar: pic
        })
    }
updateUserDetails = async () => {
 
        const  { name, bio, avatar } = this.state
        
       console.log(name, bio, avatar )
        const student = await API.graphql(graphqlOperation(createStudentProfile, { input: {bio: bio, avatar: avatar, name: name}  }))
           console.log('details to be updated!', student.data.createStudentProfile)
        // this.props.userReceived(user)
        this.setState({student: [student.data.createStudentProfile]})
        this.props.studentProfileRecieved(this.state.student)
   
        // console.log("THIS IS STUDENT IN USER DETAILS>", student)
    this.props.navigation.navigate('main')


    
            console.log('error:', err)
        }  
 
    render(){
        let { image } = this.state;
        return (
        
   <View style={{flex: 1, alignItems: "center", alignContent: "center", justifyContent: "space-between", flexDirection: "column"}}>       
 
   
    <View> 
        <TextInput autoCorrect={false} value={this.state.name} onChangeText={(text) => this.updateName(text, 'name')} placeholder="name" style={{width: 300, height: 50, backgroundColor:  'white', borderBottomColor: '#311B92', borderBottomWidth: 3 }} />
        <TextInput value={this.state.bio} onChangeText={text => this.updateBio(text, 'bio')} placeholder='bio' style={{width: 300, height: 50, backgroundColor:  'white', borderBottomColor: '#311B92'}} />
        {/* <TextInput value={this.state.picture} onChangeText={text => this.updatePicture(text, 'picture')} placeholder='picture' style={{width: 300, height: 50, backgroundColor:  'white', borderBottomColor: '#311B92'}} /> */}
    </View>

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>

{this.state.avatar? 
    <View style={{flex: 2 }}>
            <Button onPress={() => ( 
          this.updateUserDetails()
      )}  title='SUBMIT'/>      
      </View>  : 
       <ActivityIndicator size="large" color="#0000ff" />
      }                   
</View>
       
        )
    } 
    }



const mapStateToProps = state => {
    return {
        user: state
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        studentProfileRecieved: student  => dispatch(actions.studentProfileRecieved(student))

    };
  
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsForm);
  