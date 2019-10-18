import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Button, TextInput } from 'react-native'
import axios from 'axios'
import { createUser } from '../../graphql/mutations'
// import { Auth } from 'aws-amplify'
// import Auth from '@aws-amplify/auth'


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

    
       async signUp() {
           console.log(this.state)
           const {username, email, password} = this.state
           await Auth.signUp({
            username,
            
            password,
            attributes: {
                email
            }
           })
           .then(user => {
            this.setState({ user })
            console.log('sign up successful!')
            console.log(this.state.user)
            // this.props.navigation.navigate('main', {
            //     user: this.state.user
            // })
          .catch(err => {
            if (err.message) {

              console.log('Error when signing up: ', err)
              alert('Error when signing up: ', err)
            } else {

              console.log('Error when signing up: ', err.message)
              alert('Error when signing up: ', err.message)
            }
          })
        })
    }

    confirmSignUp(){
        const {username, code} = this.state

        Auth.confirmSignUp(username, code)

        
        .then( data => {(console.log(data))
            
        this.props.navigation.navigate('main')
    })}
        

        // .catch(console.log('error confirming signing in: '))
    

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



export default Register