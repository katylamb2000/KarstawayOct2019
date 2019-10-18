import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Button, TextInput } from 'react-native'
import { Auth } from 'aws-amplify'

class Login extends Component {

    constructor() {
        super()
        this.state = {
                username: "",
                password:"",
                user: {}
      
        }
    }



    updateUserName(username){
       
        this.setState({
            username: username
            
        })
    }


    updateText(password){
       
        this.setState({
            password: password
        })
    }

    login(){
        const { username, password} = this.state
        Auth.signIn({username, password})
        .then( data => {(console.log(data))
            console.log('sign in successful!')

            this.props.navigation.navigate('main', {
                user: data.username
            })
        })
          

            .catch(e => {
                console.log(e);
            })
    }
    // confirmSignIn(){
    //     Auth.confirmSignIn(this.state.user, this.state.confirmationCode)
    //     .then(() => console.log('successful confim sign in!'))
    //     .catch( err => console.log('error confirming signing in!: ', err))
    // }
    render(){
        return (
            // <View style={{flex: 1}} >
            // <TouchableOpacity
            //     style={{
            //         height: 100+ '%',
            //         width:  100+ '%',
            //         flex: 1, 
            //         alignItems: 'center',
            //         justifyContner: 'center'
            //     }}
            //     onPress={() => (
            //         this.login()
            //     )}
            //  >
            //         <Text style={{fontWeight: 'bold'}}>New User? </Text> 
            //     </TouchableOpacity>
            //     </View>


<View style={{
                flex: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundColor:  '#651FFF'
                    
                }} >
        <TextInput autoCorrect={false} value={this.state.username} onChangeText={(text) => this.updateUserName(text, 'username')} placeholder="username" style={{width: 100 + '%', height: 50, backgroundColor:  'white', borderBottomColor: '#311B92', borderBottomWidth: 3 }} />
        <TextInput value={this.state.password} onChangeText={text => this.updateText(text, 'password')} placeholder='password' style={{width: 100 + '%', height: 50, backgroundColor:  'white', borderBottomColor: '#311B92'}} secureTextEntry/>
         {/* <TextInput onChangeText={value => this.addConfirmationCode(value)}  style={{width: 100 + '%', height: 50, backgroundColor:  'white', borderBottomColor: '#311B92'}} placeholder='confirmation code' />       */}
   <Button onPress={() => (
          this.login()
      )} style={{fontWeight: 'bold'}} title='SIGN IN'/> 
   
   {/* <Button onPress={() => (
          this.confirmSignIn()
      )} style={{fontWeight: 'bold'}} title='Confirm'/>  */}
    <Button  onPress={() => 
                    this.props.navigation.navigate('register')
           }
        title='Sign Up' />
      
                        
</View>
       
        )
    }
} 

export default Login