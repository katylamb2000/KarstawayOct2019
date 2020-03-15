import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, Button } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux'
import { SearchBar, Badge } from 'react-native-elements';
import  Messages  from './Messages'
import { createProfilePicture } from '../../graphql/mutations'
import { createTeacher } from '../../graphql/mutations'
import { byStudent } from '../../graphql/queries'
import { byOwner } from '../../graphql/queries'
// import  {API,  graphqlOperation } from '@ws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../../../aws-exports';
import NewCompanyForm from './NewCompanyForm';
API.configure(awsmobile)      





class UserProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showMessages: false,
            messages: [],
            sentBY: "",
            studentProfileID: null,
            reply: false
        }
    }

    showMessages(){
        this.setState({
            showMessages: !this.state.showMessages
        })
    }

    // reply(){
    //     this.setState({
    //         reply: !this.state.reply
    //     })
    // }


    

    showMessagesNumber = async() => {
        const studentID = this.state.student.id

        console.log("studentID", studentID)
        messages = await API.graphql(graphqlOperation(byStudent, {studentProfileID: studentID}))
        this.setState({
            messages: messages.data.byStudent.items
        })
        console.log("How many messages?", this.state.messages.length)
      }
        // {this.state.showMessages? this.props.navigation.navigate("Messages") : null
    

    // getCompany = async() =>{
    //     const owner = this.props.user.account.user
        
    //     company = await API.graphql(graphqlOperation(companyAdminOwner , {owner: owner}, items))
    //     console.log("WHAT IS COMPNAY???", company)
    //     {company.data.companyAdminOwner.items.map(item => {
            // this.setState({
            //     // student: student.data.ByOwner.items
            //     companyName: item.companyName,
            //     logo: item.logo,
            //     bio: item.bio
              
                
            // })
    //         console.log(item)
    //     })}
    // // }

    // byMessageOwner = async() => {
    //     const sentBy = this.state.sentBy
    //     messages = await API.graphql(graphqlOperation(byMessageOwner, {sentBy: sentBy}) )
    //     console.log(messages)
    // }

    // byStudent = async() => {
    //     const student = this.
    // }



    // getProfile = async() =>{
        // const owner = this.props.user.account.user
        // console.log("WHAT IS OWNER, userprofile getprofile method???", this.props)
        
    //     student = await API.graphql(graphqlOperation(byOwner, {owner: owner}) )

    // console.log('returned student profile from userprofile!', student.data.ByOwner.items)
    
        
    // studentProfileReceived(student.data.ByOwner.items)
    // {student.data.ByOwner.items.map(item => {
      
      // studentProfileReceived(student.data.ByOwner.items)
//     {student.data.ByOwner.map(student => {      
     
//         this.setState({
// student: student

            // studentID: item.id,
            // name: item.name,
            // bio: item.bio,
            // avatar: item.avatar

            
        // }
        // )
    //     this.showMessagesNumber()
    // console.log("WHAT IS THIS HERE", this.state.student)
       
    // })}}
   


    addACompany() {
        this.setState({
            addACompany: true
        })
    }
       



    updateText(bio){
       
        this.setState({
            bio: bio
        })
    }

    updatePicture(uri){
       
        this.setState({
            avatar: uri
        })
    }

    updateName(name){
       
        this.setState({
            name: name
        })
    }

    // componentWillMount(){
    //        {this.props.studentProfileReducer.student.map(student => {
    //     this.setState({
    //         student: student
    //     }) 
    //   })
    //   {this.props.student.studentProfileReducer.student.map(student => {
    //     this.setState({
    //         student: student
    //     }) 
    //   })
    // console.log("tryng to get student from user  details. ", this.props)
    // }}
       
      
        // console.log("NAME!!!!!!!", this.state.student)      
    // }

    componentWillMount(){
        console.log("CPM!!!!!!!!", this.props.student)
        this.props.student.map(s=> {
            this.setState({
                name: s.name,
                avatar: s.avatar,
                bio: s.bio
            })
        })
            
    }

//  componentWillMount(){
//         const student = this.props.student
//              this.setState({
//                  Blob: student
//              })
        //      this.state.Blob.map(student => {
        //          console.log("grrrr argh!", student)
        //      })
        //     })
            // this.setState({
            //     // student: this.props.student.studentProfileReducer.student,
            //     name: student.name
            // })
        
       
    //     console.log("is ComponentDiDMOUNT RENDERING?????", this.props.student, "STATE!!!!", this.state.Blob)
    // }
    render(){
console.log(this.state.student)
    
     
        return (
         

            <View style={{flex: 1}}>
<ScrollView>
<View 
    style={{
        height: 100 + '%',
        width: 100 + '%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    }}> 
    <View style={{flexDirection: 'row', width: 100 + "%"}}> 
    

   <View style={{flex: 3,height: 100,  justifyContent: 'center', alignItems: 'center '}}>
 



    
   
 
        <Image style={{ width: 80, height: 80, borderRadius: 40}} source={{uri: this.state.avatar}} />  
  
        <Text> {this.state.name} </Text>
        <Text> {this.state.bio} </Text> 
    
        </View> 
    
        <View style ={{flex: 7,height: 100}}>
            <View style={{flexDirection: 'row', flex: 1}}> 
                <View style={{flexDirection: 'column', flex: 1}}>

                    
                    <TouchableOpacity onPress={() => this.showMessages()}>
                    <Text> 
                         messages
                     </Text>
                     <Badge value={<Text>{this.state.messages.length}</Text>} />
                     {/* <Text> </Text>  */}
                </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'column', flex: 1}}> 
                <Text>Classmates </Text> 
                    <Text>18 </Text> 
                  
                </View>

                <View style={{flexDirection: 'column', flex: 1}}> 
                <Text>Badges </Text> 
                    <Text>77 </Text> 
                </View>

            </View>
        </View> 
    </View>
  


  
  
  
    <ScrollView> 

    {/* {this.state.showMessages? this.state.messages.map(message => {
return(
    <Messages message={message} sender={this.state.student}/> 
    )
  })
: null 



} */}
</ScrollView>
</View>
   

{this.state.company? (
    <View>
    
    <Text>Switch to {this.state.companyName} </Text> 
    </View>  
    ) : null

  

 }
<View> 
{this.state.addACompany? (



<NewCompanyForm /> ) : null

    
}
</View>
        

         </ScrollView>


    

</View>

           
        )
 
    // }
        
    //     )
} 
}

const mapStateToProps = state => {
    return {
        student: state.studentProfileReducer.student
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // studentProfileReceived: student => dispatch(actions.studentProfileReceived(student))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)