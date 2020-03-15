import React, { Component, useEffect } from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, TextInput, SafeAreaView, ImageBackground} from 'react-native'
import { PostFeed } from '../container'
import { Auth } from 'aws-amplify'
import { SearchBar, Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import actions from "../../redux/actions";
import {connect} from 'react-redux'
import { byOwner } from '../../graphql/queries'

import { API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../../../aws-exports';

API.configure(awsmobile)  


import { getUser } from "../../graphql/queries"
 



class MainFeed extends Component {
   
  

    constructor(props) {
        super(props)
        this.state = {
            user: ""
    }}
 
   componentWillReceiveProps(){
       this.setState({
           student: this.props.student
       })
   }
   
       
    //         Auth.currentSession()
    //            .then(data => 
               
    //         this.setState({
    //             user: data.accessToken.payload.username
    //          })
    //         //  .then(
    //         //      this.getProfile()
    //         //  )

    //            .catch(err => console.log(err))
    //            )
               
            
    //         }

            // getProfile = async() =>{
            //     const owner = this.state.user
            //     console.log("WHAT IS OWNER???", owner)
                
            //     student = await API.graphql(graphqlOperation(byOwner, {owner: owner}) )
        
            // console.log('student profile returned on mainfeed', student.data.ByOwner.items)
        
            // }

    // useEffect(() => {
    //     Auth.currentSession()
    //        .then(data => this.setState({
    
    //        user: data.accessToken.payload.username})
          
    //        .catch(err => console.log(err))
    //        )}, [])
    
    viewSelectedClassmate(classmate){
        this.props.classmateSelected(classmate)
        this.props.navigation.navigate('ClassmatesProfile')
    }


    // const discoverCards = [{name: "Adventures", uri: }]
    openPage() {
    const chosen = this.state.chosen
    this.props.navigation.navigate(chosen)
        }

        openAllTeachers() {
         
            this.props.navigation.navigate('AllTeachers')
        }

        openAllActivities() {
         
            this.props.navigation.navigate('AllActivities')
        }

            newUser(){
                const user = this.state.user
                this.props.userReceived(user)
            }

//    componentDidMount(){
//        console.log(this.props.student)
//    }
// componentDidMount(){
//     console.log("PROPS ON MAIN", this.props.student)
// }

          //  {/* <PostFeed navigation={this.props.navigation} />  */}
          
        
        // {this.props.student.map(student => {
        //  <Text> {student.name} </Text>
        // })} 
                
    // </View>
   
    render(){
                
       
            // console.log("BIO!!!!!!", student.bio)})}
// console.log("from MMMAAIIINNNFEEEEEEEED!!!!!!!", this.props.student.name, "AND IN STATE", this.state)
        

        return(
        
       

      
      <ScrollView style={{flex: 1}}>


<View style={{flex: 1}}> 
      
{this.state.student? this.state.student.map(student => { 
 <Text> Hello {student.bio} </Text>


}) : null}
          
                
           </View>       
             
{/* <PostFeed /> */}
             

</ScrollView>
              
      
  
        )
        
    }


}

const styles = StyleSheet.create({
   tempNav: {
       width: 100 + '%',
       height: 50,
       backgroundColor: 'green',
       borderBottomWidth: StyleSheet.hairlineWidth,
       justifyContent: 'center',
       alignItems: 'center'
   
   },
   welcome: {
    width: 100 + '%',
    height: 70,
    backgroundColor: 'white' 
 

}
})

const mapStateToProps = state => {
    return {
        student: state.studentProfileReducer.student
    }
}

const mapDispatchToProps = dispatch => {
    return{
    //  userReceived: user => dispatch(actions.userReceived(user))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainFeed)

