import React, { Component } from 'react'
import { View, StyleSheet, Button, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { PostFeed } from '../container'
import { SearchBar, Card } from 'react-native-elements'
import { listTeachers } from "../../graphql/queries"
import actions from "../../redux/actions";
import { connect } from "react-redux";
import { API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../../../aws-exports';
API.configure(awsmobile)  



class AllTeachers extends Component {
    constructor() {
        super()
        this.state = {
              allTeachers: [],
               teacher: {}
                
             
      
        }
    }

    componentWillMount(){
        this.listTeachers()
    }
    
    listTeachers = async () => {
    
    const allTeachers = await API.graphql(graphqlOperation(listTeachers))
    // console.log("ALL TEACHERS!!!!!!", allTeachers)
    this.setState({
        // AllTeachers: allUsers.data.listStudentProfiles.items
        allTeachers: allTeachers.data.listTeachers.items
        
    }
    )
    // console.log('listUsers', allUsers);
    }
  
    viewSelectedTeacher(teacher) {
              this.props.teacherSelected(teacher)
                this.props.navigation.navigate('teacherPageTabs')
                }
          
        
            render(){
                console.log("Allteachers from state", this.state.allTeachers)
                return(
        
               <View style={{flex: 1}}>
        
        <ScrollView>
        
                    
  

         
            {this.state.allTeachers.map(teacher => 

<Card

title={teacher.name}
image={{uri: teacher.student.avatar}}>
<Text style={{marginBottom: 10}}>
    MY CLASSES
</Text>
<Button
   // const id = {classmate.id}
   // onPress={() => console.log(classmate)} 
onPress={() => this.viewSelectedTeacher(teacher)} 
  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
  title='View Teacher Page' />
</Card>
                 
 
          


              
        ) }
            
            
            
        
           
            
           
       
         
      

            



         


    </ScrollView>
   </View> 


      
        

        

                     
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
            // borderBottomWidth: StyleSheet.hairlineWidth
            // justifyContent: 'space-between',
            // alignItems: 'center'
        
        }
        })

       
        const mapStateToProps = state => {
            return {};
          };
          
          const mapDispatchToProps = dispatch => {
            return {
                teacherSelected: teacher => dispatch(actions.teacherSelected(teacher))
              
            };
          
          };
          
          export default connect(mapStateToProps, mapDispatchToProps)(AllTeachers);