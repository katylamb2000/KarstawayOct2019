import React, { Component, useEffect } from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, TextInput, SafeAreaView, ImageBackground} from 'react-native'
import { PostFeed } from '../container'
import { Auth } from 'aws-amplify'
import { SearchBar, Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import actions from "../../redux/actions";
import {connect} from 'react-redux'

import API, { graphqlOperation } from '@aws-amplify/api'

import { getUser } from "../../graphql/queries"
 



class Discover extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "",
            tiles: [{ handleClick: () => this.openAllCamps(), name: "Adventures", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Nz71bO2_5eHkBjSpqbtqmZxhMR41D7ovML-wq0bW1RCflv0Ppg&s"}, 
            { handleClick: () => this.openAllTeachers(), name: "Teachers", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjqo3D9D__JvbS6cl1BtAL7jolPKWb0tsZQLVWYEa92ZTJ80V&s"},
            {handleClick: () => this.openAllActivities(), name: "Activites", image: "https://londonkarstway.s3.eu-west-2.amazonaws.com/Videos/abseil.JPG"},
            {handleClick: () => this.openAllSkills(), name: "Skills", image: "https://www.newzealand.com/assets/Tourism-NZ/Nelson/ba40378fe9/img-1536928144-4748-13836-F53C3949-ED9E-E0DC-CF6EC0D789D9308A__FocalPointCropWzI0MCw0ODAsNTAsNTAsNzUsImpwZyIsNjUsMi41XQ.jpg"},
            {handleClick: () => this.openAllClassmates(), name: "Classmates", image: "https://karstawayoct2019-test-20191002203741-deployment.s3.amazonaws.com/photos/photo.jpg"},
            {handleClick: () => this.openAllEnglish(), name: "English", image: "https://londonkarstway.s3.amazonaws.com/images%2F196.jpg"}]
        }
    }

    // componentDidMount(){
       
    //         Auth.currentSession()
    //            .then(data => 
                
    //         this.setState({
    //             user: data.accessToken.payload.username
    //          })
    //            .catch(err => console.log(err))
    //            )
    //         }
        

    viewSelectedClassmate(classmate){
        this.props.classmateSelected(classmate)
        this.props.navigation.navigate('ClassmatesProfile')
    }


        openAllTeachers() {
         
            this.props.navigation.navigate('AllTeachers')
        }

        openAllActivities() {
         
            this.props.navigation.navigate('AllActivities')
        }

        openAllCamps() {
         
            this.props.navigation.navigate('AllActivities')
        }

        openAllClassmates() {
         
            this.props.navigation.navigate('AllClassmates')
        }
            newUser(){
                const user = this.state.user
                this.props.userReceived(user)
            }
            openwhat(){
                console.log("what!!!!!")
            }
            componentWillMount(){
                {this.props.student.studentProfileReducer.student.map(student => {
                  this.setState({
                      student: student
                  }) 
                })}
              }
          
          
              
  

    render(){
    console.log("what is the user now?> ")
        return(
            <ScrollView >
                
                <Text style={{paddingTop: 45, paddingLeft: 10, fontSize: 16, fontWeight: 'bold'}}> 
                    Hi {this.state.student.name} what can we help you discover today?
                    {/* {this.props.user.account.user.user.username}, */}
                </Text>

            <ScrollView horizontal  > 
            {/* () => this.props.navigation.navigate('AllCamps')} */}
            {this.state.tiles.map(tile => {
               
return(

            <Tile
            const page = {tile.name}
            key={this.state.tiles.length}
            imageSrc={{uri: tile.image}}
  onPress={() => tile.handleClick()}
  title={tile.name}
     featured
    
/>
)
    })}           
                 
               
               
               

                     
              
                 </ScrollView>

                </ScrollView>
    
             
        

         ) }
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
        student: state
    }
}

const mapDispatchToProps = dispatch => {
    return{
    //  userReceived: user => dispatch(actions.userReceived(user))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discover)

