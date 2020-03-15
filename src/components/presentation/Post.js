import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation'

import actions from "../../redux/actions"
import { connect } from "react-redux";


// import Profile from '../screens/Profile'


class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "ORIGINAL NAME",
            openClassroom: false,
            postOwner: ''
      
   
        }
}



viewPostOwner(){
  const owner = this.state.name
  
  this.props.ownerReceived(owner);
  this.props.navigation.navigate('teacherPageTabs')
  console.log("right whats next?", this.state.postOwner)
}


  


    render(){
        return(
      
     
               
    
<View style={{flex: 1}}>
    {this.state.openClassroom? 
    <Classroom /> : null}
                <View style={styles.userBar}>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                     <TouchableOpacity onPress={() => this.viewPostOwner() }>
            
                    <Image 
                    style={{width: 30, height: 30, borderRadius: 20, paddingLeft: 15}}
                    source={{uri: 'https://miro.medium.com/fit/c/256/256/0*U3VpFCH5wVOO56gg'}}/>
                     <Text style={{paddingLeft: 10}}>{this.state.name} </Text> 
                     </TouchableOpacity>

                    </View> 
                    <View style={{alignItems: 'center'}}> 
                    <Text style={{fontSize: 30, paddingRight: 15}}> ...</Text>
                    </View>
                </View> 


                <VideoPlayer
  videoProps={{
    shouldPlay: false,
    
    resizeMode: Video.RESIZE_MODE_CONTAIN,
    source: {
      uri: 'https://londonkarstway.s3.eu-west-2.amazonaws.com/Videos/KatyIntro.MOV',
    },
  }}
     inFullscreen={true}

/> 
  
  






<View style={styles.iconBar}>
<TouchableOpacity> 
<Icon name="heart" size={20} style={{paddingLeft: 10, paddingTop: 5}} color='red' />
</TouchableOpacity>

<TouchableOpacity onPress={() => this.props.navigation.navigate('teacherPageTabs')}> 
<Icon name="comment" size={30} style={{paddingLeft: 10, paddingTop: 5}} color='black' />
</TouchableOpacity>

<TouchableOpacity> 
<Icon name="television" size={20} style={{paddingLeft: 10, paddingTop: 5}} color='red' />
</TouchableOpacity>

{/* <TouchableOpacity> 
<Icon name="" size={20} style={{paddingLeft: 10, paddingTop: 5}} color='red' />
</TouchableOpacity> */}
                    {/* <Image 
                    style={{height: 20 , width: 20}}
                    source={{uri: 'https://cdn2.vectorstock.com/i/1000x1000/44/71/heart-icon-line-outline-love-symbol-vector-21084471.jpg'}} />  */}
            </View>
            <View style={{alignItems: 'center'}}> 
                    <Text style={{fontSize: 12, paddingRight: 15}}> Teacher Bobby will teach you how to go hiking. </Text>
                    </View>

<View style={styles.userBar}>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                   
                    <Image 
                    style={{width: 30, height: 30, borderRadius: 20, paddingLeft: 15}}
                    source={{uri: 'https://miro.medium.com/fit/c/256/256/0*U3VpFCH5wVOO56gg'}}/>
                     <Text style={{paddingLeft: 10}}>Teacher Katy </Text> 
                     
                    </View> 
                    <View style={{alignItems: 'center'}}> 
                    <Text style={{fontSize: 30, paddingRight: 15}}> ...</Text>
                    </View>
                </View>

           
                <VideoPlayer
  videoProps={{
    shouldPlay: false,
    
    resizeMode: Video.RESIZE_MODE_COVER,
    source: {
      uri: 'https://londonkarstway.s3.eu-west-2.amazonaws.com/Videos/Raising+a+Reader+_+How+to+Read+to+Children+_+AD.mp4',
    },
  }}
//   inFullscreen={true}
  width={400}
    height={200}
/>
     

                <TouchableOpacity onPress={() => {this.props.navigation.navigate('teacherPageTabs')}}>
             

                <Image            
                style={{height: 220, width: 100 + '%'}}
                source={{uri: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/69915495_10100753717927269_8505049837614399488_n.jpg?_nc_cat=103&_nc_oc=AQmqCSJCl-vill80h648uiOCH4fQdY5D69waOBmBAfx5ZHCeQPMtlsI5k4S28-SqRRI&_nc_ht=scontent-dfw5-1.xx&oh=cfc67e6621da9108e0467f39bc1ee4bf&oe=5DF8F3D9'}}
                /> 
             
  </TouchableOpacity >

  <View style={styles.iconBar}>
                    <Image 
                    style={{height: 20 , width: 20}}
                    source={{uri: 'https://cdn2.vectorstock.com/i/1000x1000/44/71/heart-icon-line-outline-love-symbol-vector-21084471.jpg'}} /> 
            </View>
            <View style={{paddingLeft: 10 }}> 
                    <Text style={{fontSize: 12, paddingRight: 15}}> Learn about everything you will need to start your day on this trip. </Text>
                    </View>
                </View>
      
        )

    }
}

const styles = StyleSheet.create({
   tempNav: {
       width: 100 + '%',
       height: 60,
    //    marginTop: 20,
       backgroundColor: 'green',
       borderBottomWidth: StyleSheet.hairlineWidth,
       justifyContent: 'center',
       alignItems: 'center'
   },
   userBar: {
       width: 100 + '%',
       height: 50,
       flexDirection: 'row',
       justifyContent: 'space-between'
   },
   iconBar: {
       height: 50,
       borderBottomWidth: StyleSheet.hairlineWidth,
       borderTopWidth: StyleSheet.hairlineWidth,
       borderColor: 'grey',
       flexDirection: 'row',
       alignItems: 'center',
       alignContent: 'center'
   }
})
const PostwithNavigation = withNavigation(Post)



const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    ownerReceived: owner => dispatch(actions.ownerReceived(owner))
    
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(PostwithNavigation)
;