import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Button, TextInput } from 'react-native'
import axios from 'axios'
import { createUser } from '../../graphql/mutations'
import { Auth } from 'aws-amplify'
import actions from "../../redux/actions";
import { connect } from "react-redux";

import { createTeacher} from "../../graphql/mutations"
import { API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../../../aws-exports';
API.configure(awsmobile)      




class NewTeacherForm extends Component {

    

    constructor() {
        super()
        this.state = {

   
        }
    }


handleChangeName(text ){

    this.setState({
        teacherName: text
    })
    console.log(this.state)
}
handleChangeBio(text ){

    this.setState({
        teacherBio: text
    })
    console.log(this.state)
}
handleChangeNationality(text ){

    this.setState({
        nationality: text
    })
    console.log(this.state)
}
handleChangeAvatar(text ){

    this.setState({
        teacherAvatar: text
    })
    console.log(this.state)
}

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

        // createNewTeacher = async () => {
        //     const { name, image, description, location } = this.state
        //     const companyID = this.props.companyID
        //     const company = this.props.company
        //     try {
        //        const program = await API.graphql(graphqlOperation(createTeacher, { input: { companyID: companyID, location: location, description: description, name: name, image, image }}))
        //         console.log('new company!!!!', program)
             
        //      }
        //      catch (err) {
        //       console.log('error signing up company: ', err)
        //     }
        //   }

          createTeacher = async () => {
              
            const { teacherName, nationality, teacherAvatar, teacherBio } = this.state
          const studentID = this.props.navigation.state.params.studentID
            try {
               const teacher = await API.graphql(graphqlOperation(createTeacher, { input: {teacherName: teacherName, nationality: nationality, teacherBio: teacherBio, teacherAvatar: teacherAvatar, studentProfileID: studentID}}))
                console.log('new company!!!!', teacher.data.createTeacher)
                this.setState({
                    teacher: teacher.data.createTeacher
                  })
                 
                const t = this.state.teacher
                this.props.switchedToTeaching(t)
                t.map(teacher => {
                    this.setState({teacher: teacher.teacherName})
                  })
              }

             catch (err) {
              console.log('error signing up teacher: ', err)
            }
          }
    


 

    render(){
        console.log("trying to get ID" , this.props.navigation.state.params.studentID)
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContner: 'center'}}>
   
   <View style={{flex: 1, alignItems: "center", alignContent: "center", justifyContent: "space-between", flexDirection: "column"}}>       
 
   
    <View> 
        <TextInput name='teacherName' value={this.state.teacherName} onChangeText={(text, name) => this.handleChangeName(text, name)} placeholder="name" style={{width: 300, height: 50, backgroundColor:  'white', borderBottomColor: '#311B92', borderBottomWidth: 3 }} />
        <TextInput name='nationality' value={this.state.nationality} onChangeText={(text, name) => this.handleChangeNationality(text, name)} placeholder='nationality' style={{width: 300, height: 50, backgroundColor:  'white', borderBottomColor: '#311B92'}} />
        <TextInput name='teacherAvatar' value={this.state.teacherAvatar} onChangeText={(text, name) => this.handleChangeAvatar(text, name)} placeholder='picture' style={{width: 300, height: 50, backgroundColor:  'white', borderBottomColor: '#311B92'}} />
        <TextInput name='teacherBio' value={this.state.teacherBio} onChangeText={(text, name) => this.handleChangeBio(text, name)} placeholder='bio' style={{width: 300, height: 50, backgroundColor:  'white', borderBottomColor: '#311B92'}} />

    </View>


    <View style={{flex: 2 }}>
            <Button onPress={() => ( 
          this.createTeacher()
      )}  title='SUBMIT'/>      
      </View>                     
</View>

{this.state.teacher ? 
this.props.navigation.navigate('MyTeachingPage')
: null}

                </View> 
        )}
      
} 



const mapStateToProps = state => {
    return {
        student: state
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        switchedToTeaching: teacher => dispatch(actions.switchedToTeaching(teacher))
      
    };
  
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(NewTeacherForm);