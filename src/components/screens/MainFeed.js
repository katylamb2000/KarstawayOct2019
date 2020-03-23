import React, { Component, useEffect } from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, TextInput, SafeAreaView, ImageBackground, ActivityIndicator} from 'react-native'
import { PostFeed } from '../container'
import { Post } from '../presentation'
import { Auth } from 'aws-amplify'
import { SearchBar, Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import actions from "../../redux/actions";
import {connect} from 'react-redux'
import { byOwner } from '../../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../../../aws-exports';
API.configure(awsmobile)    
import { listPosts } from "../../graphql/queries"



import { getUser } from "../../graphql/queries"
 



class MainFeed extends Component {
   
  

    constructor(props) {
        super(props)
        this.state = {
            user: ""
    }}
 

componentWillMount(){
    console.log("CPM!!!!!!!!", this.props.student)
    this.props.student.map(s=> {
        this.setState({
            name: s.name,
            avatar: s.avatar,
            bio: s.bio,
            id: s.id
        })
    })
        
}
   
componentDidMount(){
    this.listQuery()
}

listQuery = async () => {

const allPosts = await API.graphql(graphqlOperation(listPosts))
console.log("ALL POSTS!!!!!!", allPosts)
this.setState({
    allPosts: allPosts.data.listPosts.items
    
}
)}
 
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


    render(){
         
        return(
        
       

      
      <ScrollView style={{flex: 1, paddingTop: 100}}>


<View style={{flex: 1}}> 
      
 <Text> Hello {this.state.name} </Text>

          
                
           </View>       
{this.state.allPosts? this.state.allPosts.map(post => {
    return(
    <Post key={post.id} post={post} studentProfileID={this.state.id}/>)
}) :       <ActivityIndicator size="large" color="#0000ff" />
}        

             

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

