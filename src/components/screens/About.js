import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import {connect} from 'react-redux'


class About extends Component {

    constructor(props) {
        super(props)
        this.state = {
                open: false,
                date: ''
               
        }
    }

   componentWillMount(){
   this.setState({
       teacher: this.props.teacher.teacherSelectedReducer
   })}


 
    openBookingForm(){
        this.setState({
            open: true
        })
    }

    hideDateTimePicker = (datetime) => {
        this.setState({ 
            open: false,
            date: moment(datetime).format('MMMM Do YYYY HH:mm')
    });
      };
     
      handleDatePicked = date => {
        //   this.setState({
        //       date: date
        //   })
        console.log("A date has been picked: ", date);

        this.hideDateTimePicker();
      };
    
    render(){
        // console.log(this.props.navigation.state.params.photo)
        console.log("Props on about page", this.props.teacher.teacherSelectedReducer.student.avatar, "STATE ON ABOUT PAGE", this.state) 
        return (
        <ScrollView>
           <View style={{flex: 1}}>
        
         <View style={{ alignContent: 'center' }}> 
         <Image source={{uri: this.state.teacher.student.avatar }} style={{height: 300, width: 100 + '%'}} ></Image>

     
         {/* <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8l5J4VGGtVN3QaLP6xvaU93w5_IOJA91Zy3fiTvWgCfgZPkQJ&s' }} style={{height: 300, width: 100 + '%'}} ></Image> */}
         <Text style={{fontSize: 34,  color: 'black', marginLeft: 15}}> 
         {this.state.teacher.name}
  {/* {this.props.postOwner.postOwner.owner} */}
         
         </Text>
        </View>
        <View style={{ justifyContent: 'center'}}>
         <Text style={{marginLeft: 15, marginRight: 15}} > {this.state.teacher.student.bio} </Text>        
        </View>
    
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <TouchableOpacity onPress={() => (this.openBookingForm())} style={{marginTop: 10, marginleft: 10}}>
            <View style={{marginLeft: 10, height: 30, width: 120, backgroundColor: '#d500f9', borderRadius: 8, alignItems: 'center', justifyContent: 'center'}}>
                 <Text style={{color: 'white', fontWeight: 'bold'}}> 
                  Book a class
                 </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => (this.openBookingForm())} style={{marginTop: 10, marginleft: 10}}>
            <View style={{marginLeft: 10, height: 30, width: 120, backgroundColor: '#d500f9', borderRadius: 8, alignItems: 'center', justifyContent: 'center'}}>
                 <Text style={{color: 'white', fontWeight: 'bold'}}> 
                  Follow
                 </Text>
                 
            </View>
        </TouchableOpacity>
    </View>
    

<DateTimePicker
        isVisible={this.state.open}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          mode='datetime'
        />
        {this.state.date? 
        <Text> You have scheduled a class for {this.state.date} </Text>
        : null}

</View>
</ScrollView>
           
        )
    }
} 


// export default About

const mapStateToProps = state => {
    return {
        teacher: state
    }
}

const mapDispatchToProps = dispatch => {
    return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
