import React, { Component } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

import Icon from 'react-native-vector-icons/FontAwesome';
import actions from "../../redux/actions";
import Company from '../screens/Company'
import AddAProgramForm from '../screens/AddAProgramForm'
import NewTeacherForm from '../screens/NewTeacherForm'
import { About, MyTeachingPage } from '../screens'
import { SearchBar, Card } from 'react-native-elements';
import { connect } from "react-redux";
import { View, Text, TextInput, Button } from 'react-native'
import { createTeacher } from '../../graphql/mutations'
import { teacherByStudentProfileId } from '../../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../../../aws-exports';
API.configure(awsmobile)   

class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
    showCompany: false,
    addAProgramForm: false,
    company: {},
    showNewTeacherForm: false,
    openNewteacherForm: false
    }
}

componentWillMount(){

  console.log("Looking for the teacher profile" , this.props.student.studentProfileReducer.student)
  {this.props.student.studentProfileReducer.student.map(student => {
    this.setState({
        student: student,
        id: student.id
    }) 
  })}
}

updateText(name){
  this.setState({
    name: name
  })
}

// componentWillMount(){
//   this.getCompany()
// }

   // addProgram(){

    createTeacher = async () => {
        const { teacherName, student, nationality, teacherAvatar, teacherBio } = this.state
      
        try {
           const teacher = await API.graphql(graphqlOperation(createTeacher, { input: {studentProfileID: student, teacherName: teacherName, nationality: nationality, teacherBio: teacherBio, teacherAvatar: teacherAvatar}}))
            console.log('new company!!!!', teacher)
            this.setState({
              teacher: teacher
            })
         
         }
         catch (err) {
          console.log('error signing up company: ', err)
        }
      }

      goToTeaching(){
        this.state.teacherName ? 
        this.props.navigation.navigate('MyTeachingPage')
        :
        this.props.navigation.navigate('NewTeacherForm', {studentID: this.state.id})
      }

//   createNewProgram = async()=>{
//     const companyID = this.statw.companyID
//     console.log("DO SOMETHING!!!!!!", owner)
    
//     company = await API.graphql(graphqlOperation(createProgram, {owner: owner}) )

// console.log('returned student profile!', company)
//     this.setState({
//         company: company.data.CompanyAdminOwner.items
//     })}

    getTeacher = async ()=>{
      
      
      this.setState({
       
        showNewTeacherForm: !this.state.showNewTeacherForm
      })
    
  
    try{
     
      teacher = await API.graphql(graphqlOperation(teacherByStudentProfileId, {studentProfileID: this.state.id}) )
      console.log("what is teacher", teacher)
      this.setState({
        teacher: teacher.data.teacherByStudentProfileId.items
      })
     
      const t = this.state.teacher
      this.props.switchedToTeaching(t)
     t.map(teacher => {
  this.setState({teacherName: teacher.teacherName})
})
this.goToTeaching()
    }


  
    
catch{
  
  this.setState({
    openNewteacherForm: !openNewteacherForm
  })
}
    }
  // console.log("getting studentprofileID", this.state.teacherName)

  
 
    

showCompany(){
  console.log("Props in settings", this.state.student)
}
  // this.props.studentProfileReducer.student.map(student => {
  //   this.setState({
  //     studentprofileID: student.id
  //   })
  // })

  showNewTeacherForm(){
    this.setState({
      showNewTeacherForm: !this.state.showNewTeacherForm
    })
    // this.props.teacherSelected(teacher)
    // this.state.showNewTeacherForm? this.props.navigation.navigate('About') :
    // null
  }
  

  addAProgramForm(){
    // {this.state.company.map(item => {
    this.setState({
      addAProgramForm: !this.state.addAProgramForm,
      // companyID: item.id
    })
  
    // })}
  }

  
    
    render(){

        return (
            <View> 
            <ScrollView> 
            <View style={{flex: 1}}>
               <Text> 
                    Account settings
                </Text> 
              
            </View>
            <View> 
              <Button onPress={() => (
                    this.getTeacher()
                )} style={{fontWeight: 'bold'}} title='Switch to teaching'/> 
            </View>

            {/* <View style={{flexDirection: 'row'}}> 
              <TouchableOpacity onPress={() => this.showNewTeacherForm()}>
                <Text> 
                  Switch to Teaching
                </Text>

                {/* <TouchableOpacity onPress={() => this.showCompany()}>
                <Text> 
                  Switch to Teaching
                </Text> */}
                {/* <Icon name="pencil-square" size={30} style={{paddingLeft: 10, paddingTop: 5}}  />

              </TouchableOpacity>
              </View> */} 
           
       
         
              
             </ScrollView>
     </View> 

    

           
        )
    }
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Settings);