import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, Button } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux'
import { createMessage } from '../../graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../../../aws-exports';
import { getStudentProfile } from '../../graphql/queries';
API.configure(awsmobile)  



class ClassmatesProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
           
                message: "",
                openMessage: false
                
               
        }
    }

updateMessage(message){
    this.setState({
        message: message
    })
}

sendMessage = async() => {        
    const classmate = this.props.classmate.classmateSelectedReducer.id
    const sender = this.state.sender
    console.log("What is this:!!!", classmate)
    const { message } = this.state
    newmessage = await API.graphql(graphqlOperation(createMessage, { input:{ body: message, studentProfileID: classmate, senderID: sender}}))
    console.log(newmessage)
    
        this.setState({
            message: ""
        })
    
}

openMessage(){
    this.setState({
        openMessage: !this.state.openMessage
    })
}
componentWillMount(){

    {this.props.student.studentProfileReducer.student.map(student => 
        this.setState({
            sender: student.id,
            classmate: this.props.classmate.classmateSelectedReducer
            })
            )}

}

   

    

    render(){
        console.log("classmate profile i hope!", this.props.classmate.classmateSelectedReducer.id)
         const classmate = this.props.classmate.classmateSelectedReducer
        console.log( "Classmate props should be here:", this.state.classmate)
        // {this.props.student.studentProfileReducer.student.map(student => {console.log("studentID!!!!!", student.id)})}
        return (
            
            <View style={{flex: 1, paddingTop: 40}}>

<ScrollView>
{/* <View 
    style={{
        height: 100 + '%',
        width: 100 + '%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    }}>  */}
    <View style={{flexDirection: 'row', width: 100 + "%"}}> 
        <View style={{flex: 3,height: 100,  justifyContent: 'center', alignItems: 'center ', alignContent: 'center'}}>
        <Image style={{ paddingLeft: 20, width: 80, height: 80, borderRadius: 40}} source={{uri: classmate.avatar}} />   
        <Text style={{ paddingLeft: 25}}> {classmate.name} </Text>
        </View> 
        <View style ={{flex: 7,height: 100}}>
            <View style={{flexDirection: 'row', flex: 1}}> 
                <View style={{flexDirection: 'column', flex: 1}}> 
                    <Text>128 </Text> 
                    <Text>Posts </Text> 
                </View>

                <View style={{flexDirection: 'column', flex: 1}}> 
                    <Text>18 </Text> 
                    <Text>Classmates </Text> 
                </View>

                <View style={{flexDirection: 'column', flex: 1}}> 
                    <Text>77 </Text> 
                    <Text>Badges </Text> 
                </View>

            </View>
            <View> 
                <Text> {classmate.bio} </Text>
            </View> 
        </View> 
    </View>
    
    {/* <Text> 
        Hi {this.props.user}
    </Text> */}



 
<View style={{flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 15}}>
<View style={{width: 100, height: 50, backgroundColor: "pink", borderRadius: 10}}>
<Button onPress={() => (
          this.openMessage()
      )} style={{fontWeight: 'bold', color: 'pink'}} title='Send Message'/> 
</View>
<View style={{width: 100, height: 50, backgroundColor: "pink", borderRadius: 10}}>
<Button onPress={() => (
          this.openMessage()
      )} style={{fontWeight: 'bold', color: 'pink'}} title='Follow'/> 
</View>
</View> 


{this.state.openMessage? 
<View>
<TextInput autoCorrect={false} value={this.state.message} onChangeText={text => this.updateMessage(text, 'uri')} placeholder="name" style={{width: 300, height: 50, backgroundColor:  'white', borderBottomColor: '#311B92', borderBottomWidth: 3 }} />

<Button onPress={() => (
          this.sendMessage()
      )} style={{fontWeight: 'bold', color: 'pink'}} title='Send Friend Request'/> 
</View>
: null }

{/* </View>  */}

        

         </ScrollView>


         

</View>

           
        )
    }
} 

const mapStateToProps = state => {
    return {
        classmate: state,
        student: state
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassmatesProfile)