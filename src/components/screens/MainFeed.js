import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { PostFeed } from '../container'

class MainFeed extends Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         username: this.props.navigation.state.params.user.username
    //        } 
    // }

  

    render(){
        return(

       <View style={{flex: 1, width: 100+ '%', height: 100 + '%'}}>

               
                <View style={styles.tempNav}>
                    <Text style={{color: 'white'}}>Karstaway</Text> 
                    <Text style={{color: 'white'}}>{this.props.navigation.state.params.user}</Text> 
                </View>

                <PostFeed />
                </View>
      
        )

    }
}

const styles = StyleSheet.create({
   tempNav: {
       width: 100 + '%',
       height: 80,
       backgroundColor: 'green',
       borderBottomWidth: StyleSheet.hairlineWidth,
       justifyContent: 'space-between',
       alignItems: 'center'
   
   }
})
export default MainFeed