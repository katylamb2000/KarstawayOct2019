import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native'



class About extends Component {

   
    
    render(){
        // console.log(this.props.navigation.state.params.photo)
        return (
        <ScrollView>
           <View style={{flex: 1}}>

         <Text style={{fontSize: 34, fontWeight: 800, color: 'black', marginLeft: 15}}> 
             Comments
         </Text>
        </View>

    </ScrollView>
           
        )
    }
} 


export default About