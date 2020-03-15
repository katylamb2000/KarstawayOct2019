import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Button, TextInput } from 'react-native'
import axios from 'axios'
import { createUser } from '../../graphql/mutations'
import { Auth } from 'aws-amplify'
import actions from "../../redux/actions";
import { connect } from "react-redux";

import { createCompany} from "../../graphql/mutations"
import { API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../../../aws-exports';
API.configure(awsmobile)      




class NewCompanyForm extends Component {

    

    constructor() {
        super()
        this.state = {

                name: "",
                logo: "",
                bio:""
          
   
        }
    }



    updateBio(bio){
       
        this.setState({
            bio: bio
            
        })
    }

    updateName(name){
       
        this.setState({
           name: name
            
        })
    }

    updateLogo(logo) {
        this.setState({
            logo: logo
        })
    }



    createCompany = async () => {
        const { name, logo, bio, verified } = this.state
        try {
           const company = await API.graphql(graphqlOperation(createCompany, { input: {companyName: name, logo: logo, bio: bio, verified: false }}))
            console.log('new company!!!!', company)
         
         }
         catch (err) {
          console.log('error signing up company: ', err)
        }
      }
    
    

 

    render(){
        return (
            <View 
           
                style={{
                    flex: 1, 
                    alignItems: 'center',
                    justifyContner: 'center'
                
                }}
             
             >
   
                   
   <TextInput autoCorrect={false} value={this.state.name} onChangeText={(text) => this.updateName(text, 'name')} placeholder="Company name" style={{width: 80 + '%', height: 50, backgroundColor:  'white', paddingBottom: 30}} />
  
            <TextInput autoCorrect={false} value={this.state.bio} onChangeText={(text) => this.updateBio(text, 'bio')} placeholder="Describe your compnay" style={{width: 80 + '%', height: 50, backgroundColor:  'white', paddingBottom: 30}} />
             <TextInput value={this.state.logo} onChangeText={text => this.updateLogo(text, 'logo')} placeholder='logo' style={{width: 80 + '%', height: 50, backgroundColor:  'white'}} secureTextEntry/>
             
             
             <Button onPress={() => (
                    this.createCompany()
                )} style={{fontWeight: 'bold'}} title='Add your company'/> 


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
  
  export default connect(mapStateToProps, mapDispatchToProps)(NewCompanyForm);