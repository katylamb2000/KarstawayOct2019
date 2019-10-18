import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

class Profile extends Component {

    
    render(){
        console.log(this.props.navigation.state.params.photo)
        return (
            <View style={{flex: 1}}>
          
                {/* <View style={{ flexDirection: 'row', alignItems: 'center'}}>
               
                
                 <Text style={{paddingLeft: 10}}>Add text </Text> 
                 
                </View>  */}
                <Image            
                style={{height: 220, width: 100 + '%'}}
                source={{uri: this.props.navigation.state.params.photo}}
                /> 
               
                <View>
                    <TextInput      style={{height: 70, width: 100 + '%', backgroundColor: '#B39DDB'}} placeholder='What happened today?'>  </TextInput>
                </View>


                </View>
           
        )
    }
} 

export default Profile