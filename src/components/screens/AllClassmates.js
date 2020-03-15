import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, ScrollView, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { PostFeed } from '../container'
import { SearchBar, Card } from 'react-native-elements';

import { listStudentProfiles } from "../../graphql/queries"
import actions from "../../redux/actions";
import { connect } from "react-redux";
import { API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../../../aws-exports';
API.configure(awsmobile)      




class AllClassmates extends Component {

    constructor() {
        super()
        this.state = {
               allClassmates: [],
               classmate: {}
                
             
      
        }
    }





componentDidMount(){
    this.listQuery()
}

listQuery = async () => {

const allUsers = await API.graphql(graphqlOperation(listStudentProfiles))
console.log("ALL USERS!!!!!!", allUsers)
this.setState({
    allClassmates: allUsers.data.listStudentProfiles.items
    
}
)
console.log('listUsers', allUsers);
}

viewSelectedClassmate(classmate){
    this.props.classmateSelected(classmate)
    this.props.navigation.navigate('ClassmatesProfile')
}



  render(){
    //   this.listQuery()
    console.log("COMING FROM STATE", this.state.allClassmates)
  return(
<View style={{flex: 1, justifyContent: 'center'}}> 


  

    <ScrollView>
     {this.state.allClassmates.map((classmate) =>
     
     <Card

     title={classmate.name}
     image={{uri: classmate.avatar}}>
     <Text style={{marginBottom: 10}}>
         {classmate.bio}
     </Text>
     <Button
        // const id = {classmate.id}
        // onPress={() => console.log(classmate)} 
    onPress={() => this.viewSelectedClassmate(classmate)} 
       buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
       title='VIEW NOW' />
   </Card>
     )}

 </ScrollView> 
 </View>
  )
    }
}



const mapStateToProps = state => {
    return {};
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        classmateSelected: classmate => dispatch(actions.classmateSelected(classmate))
      
    };
  
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AllClassmates);