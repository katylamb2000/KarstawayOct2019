import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Button, TextInput } from 'react-native'
import { Auth } from 'aws-amplify'
import { API, graphqlOperation } from 'aws-amplify'
import PubSub from '@aws-amplify/pubsub';
import  MainFeed  from '../screens/MainFeed'
import { byOwner } from '../../graphql/queries'
import awsmobile from '../../../aws-exports';
API.configure(awsmobile)  


import actions from "../../redux/actions";
import { connect } from "react-redux";
// import { getUser } from "../../graphql/queries"
import { createStudentProfile} from "../../graphql/mutations"
import UserDetailsForm from './UserDetailsForm'
import { getSupportedVideoFormats } from 'expo/build/AR';
// import { MainFeed } from '.';


class Login extends Component {

    constructor() {
        super()
        this.state = {
                username: null,
                student: null,
                name: null
        }
    }




    componentWillMount(){
  
     Auth.currentSession()
    .then(data => {
 
        // this.setState({
        //     username: item.username
        // })
  //     })}
 const name = data.accessToken.payload.username
//  this.setState({
//    name: name
//  })
this.getProfile(name)
// this.userReceived(name)

    })
    .catch(err => console.log(err));
    }

    getProfile = async(name) =>{
      // const owner = this.state.username
     
     const student = await API.graphql(graphqlOperation(byOwner, {owner: name}))
     
     this.setState({student: student.data.ByOwner.items})
     this.props.studentProfileRecieved(this.state.student)
      {this.state.student.map(blob => {
        console.log("WHat is Student!!!!!!!", this.state.student)
        this.setState({
          name: blob.name
        })
        // {this.state.student.name? 
        //   studentProfileReceived(student)
        //   : null
        // }
        

      })}
      
  // console.log('returned student profile!', student.data.ByOwner.items, "STUDENT", student)
  
     
}


   
    render(){
      
        return (
          <View> 
            <Text>LOADING </Text> 
      {this.state.name? 
      
      // <MainFeed student={this.state.student}  />
       
          
          
this.props.navigation.navigate('main')
  
          
       
    : 

   this.props.navigation.navigate('userDetailsForm')
      
          // <UserDetailsForm  getProfile={() => this.getProfile()}  name={this.state.name} />
           }



   </View>
        )}  
}

    


const mapStateToProps = state => {
    return {
        // user: state
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
    // userReceived: user => dispatch(actions.userReceived(user)),
    studentProfileRecieved: student  => dispatch(actions.studentProfileRecieved(student))
      
    };
  
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
  