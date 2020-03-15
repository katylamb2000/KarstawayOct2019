import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'



class Discussion extends Component {

    render(){
        // console.log(this.props.navigation.state.params.photo)
        return (
            <View style={{flex: 1}}>

       


         <Text style={{fontSize: 24, fontWeight: 'bold', paddingTop: 10, marginLeft: 10}}> 
             Discussion
         </Text>
         

</View>
           
        )
    }
} 

export default Discussion