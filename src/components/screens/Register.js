import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Button, TextInput } from 'react-native'
import axios from 'axios'
import { createUser } from '../../graphql/mutations'
import { Auth } from 'aws-amplify'
import actions from "../../redux/actions";
import { connect } from "react-redux";
import { byOwner } from '../../graphql/queries'
// import  {API,  graphqlOperation } from '@ws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../../../aws-exports';
API.configure(awsmobile)      


// Amplify.configure({
//     Auth: {
  
      
  
//       // IdentityPoolId: 'us-east-1:ed99a0bd-fef8-4a69-becd-639ca24ddcbd',
//       userPoolId: 'us-east-2_pvaoe5T59',
//       userPoolWebClientId: '49kis48putnd8tmd848prgmt2k',
//         // REQUIRED - Amazon Cognito Region
//         region: 'us-east-2'
//     }
//   })


class Register extends Component {

    

    constructor() {
        super()
        this.state = {
            // credentials: {
                username: "",
                email: "",
                password:"",
                code: "",
                user: {}
            // }
        }
    }
    componentDidMount(){this.getStudentProfile()}
    getStudentProfile = async() =>{
        const owner = this.props.user.account.user
        console.log("WHAT IS OWNER???", owner)
        student = await API.graphql(graphqlOperation(byOwner, {owner: owner})
      
                 
        )
  console.log(student)
    }



    updateEmail(email){
       
        this.setState({
            email: email
            
        })
    }

    updateUserName(username){
       
        this.setState({
            username: username
            
        })
    }

    updateCode(code) {
        this.setState({
            code: code
        })
    }


    updateText(password){
       
        this.setState({
            password: password
        })
    }


    signUp = async () => {
        const { username, password, email } = this.state
        try {
          const userA = await Auth.signUp({ username, password, attributes: { email }})
          console.log('user successfully signed up!: LOOOKING FOR USERSUB', userA.userSub)
          const user = userA.user
          this.props.userReceived(userA);
          this.setState({ 
              showConfirmationForm: true

         })
        } catch (err) {
          console.log('error signing up: ', err)
        }
      }
      confirmSignUp = async () => {
        const { username, code } = this.state
        try {
          const success = await Auth.confirmSignUp(username, code)
          console.log('successully signed up!', success)
         alert('User signed up successfully!')
        //   const authenticatedUser =  await Auth.currentAuthenticatedUser()
        //   console.log('AUTHENTICATED USED METHOD CALLED:', authenticatedUser)
        //   this.setState({ ...initialState })
        
        //  this.setState({ user, showConfirmationForm: true })
        //  this.props.navigation.navigate('userDetailsForm')
         this.props.navigation.navigate('main')

        } catch (err) {
          console.log('error confirming signing up: ', err)
        }
      }
    

 

    render(){
        return (
            <View 
           
                style={{
                    flex: 1, 
                    alignItems: 'center',
                    justifyContner: 'center',
                    backgroundColor:  'pink'
                }}
             
             >
   
                   
   <TextInput autoCorrect={false} value={this.state.username} onChangeText={(text) => this.updateUserName(text, 'username')} placeholder="username" style={{width: 80 + '%', height: 50, backgroundColor:  'white', paddingBottom: 30}} />
  
            <TextInput autoCorrect={false} value={this.state.email} onChangeText={(text) => this.updateEmail(text, 'email')} placeholder="email" style={{width: 80 + '%', height: 50, backgroundColor:  'white', paddingBottom: 30}} />
             <TextInput value={this.state.password} onChangeText={text => this.updateText(text, 'password')} placeholder='password' style={{width: 80 + '%', height: 50, backgroundColor:  'white'}} secureTextEntry/>
             <TextInput value={this.state.code} onChangeText={text => this.updateCode(text, 'code')} placeholder='Confirmation Code' style={{width: 80 + '%', height: 50, backgroundColor:  'white'}} />
             <Button onPress={() => (
                    this.signUp()
                )} style={{fontWeight: 'bold'}} title='Get Code'/> 

<Button onPress={() => (
                    this.confirmSignUp()
                )} style={{fontWeight: 'bold'}} title='Sign Up'/> 
                </View>

                
        )
    }
} 



const mapStateToProps = state => {
    return {};
  };
  
  const mapDispatchToProps = dispatch => {
    return {
    userReceived: user => dispatch(actions.userReceived(user))
      
    };
  
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Register);