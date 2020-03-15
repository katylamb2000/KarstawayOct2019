import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Button, TextInput } from 'react-native'
import axios from 'axios'
import { createUser } from '../../graphql/mutations'
import { Auth } from 'aws-amplify'
import actions from "../../redux/actions";
import { connect } from "react-redux";

import { createProgram } from "../../graphql/mutations"
import { API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../../../aws-exports';
API.configure(awsmobile)      




class AddAProgramForm extends Component {

    

    constructor() {
        super()
        this.state = {

   
        }
    }


handleChange(text){
    console.log("new value", text);
}
    // updateBio(bio){
       
    //     this.setState({
    //         bio: bio
            
    //     })
    // }

    // updateName(name){
       
    //     this.setState({
    //        name: name
            
    //     })
    // }

    // updateLogo(logo) {
    //     this.setState({
    //         logo: logo
    //     })
    // }

    // addProgram(){

        createNewProgram = async () => {
            const { name, image, description, location } = this.state
            const companyID = this.props.companyID
            const company = this.props.company
            try {
               const program = await API.graphql(graphqlOperation(createProgram, { input: { companyID: companyID, location: location, description: description, name: name, image, image }}))
                console.log('new company!!!!', program)
             
             }
             catch (err) {
              console.log('error signing up company: ', err)
            }
          }
    


 

    render(){
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContner: 'center'}}>
   
   <View style={{flex: 1, alignItems: "center", alignContent: "center", justifyContent: "space-between", flexDirection: "column"}}>       
 
   
    <View> 
        <TextInput autoCorrect={false} value={this.state.name} onChangeText={(text) => this.handleChange(text, 'name')} placeholder="name" style={{width: 300, height: 50, backgroundColor:  'white', borderBottomColor: '#311B92', borderBottomWidth: 3 }} />
        <TextInput value={this.state.location} onChangeText={text => this.handleChange(text, 'location')} placeholder='location' style={{width: 300, height: 50, backgroundColor:  'white', borderBottomColor: '#311B92'}} />
        <TextInput value={this.state.image} onChangeText={text => this.handleChange(text, 'image')} placeholder='picture' style={{width: 300, height: 50, backgroundColor:  'white', borderBottomColor: '#311B92'}} />
        <TextInput value={this.state.description} onChangeText={text => this.handleChange(text, 'description')} placeholder='description' style={{width: 300, height: 50, backgroundColor:  'white', borderBottomColor: '#311B92'}} />

    </View>


    <View style={{flex: 2 }}>
            <Button onPress={() => ( 
          this.createNewProgram()
      )}  title='SUBMIT'/>      
      </View>                     
</View>



                </View> 
        )}
      
} 



const mapStateToProps = state => {
    return {};
  };
  
  const mapDispatchToProps = dispatch => {
    return {
    userReceived: user => dispatch(actions.userReceived(user))
      
    };
  
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddAProgramForm);