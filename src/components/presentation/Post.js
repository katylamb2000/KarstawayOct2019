import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, Avatar} from 'react-native'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation'
import { createComment } from '../../graphql/mutations'
import Comment from '../screens/Comment'
import { API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../../../aws-exports';
API.configure(awsmobile)   
import actions from "../../redux/actions"
import { connect } from "react-redux";
import { TextInput } from 'react-native-gesture-handler';


// import Profile from '../screens/Profile'


class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "ORIGINAL NAME",
            openClassroom: false,
            postOwner: '',
            openNew: false,
            newComment: '',
            goalAdded: false
      
   
        }
}



componentWillMount(){
  this.setState({
    isAVideo: this.props.post.isAVideo
  })
}


onChangeText(text){
  this.setState({
    newComment: text
  })
}

openNewCommentForm(){
  this.setState({
    openNew: !this.state.openNew
  })
}

viewPostOwner(){
  const owner = this.state.name
  
  this.props.ownerReceived(owner);
  this.props.navigation.navigate('teacherPageTabs')
  console.log("right whats next?", this.state.postOwner)
}

goToStudentPage(classmate){
  console.log("postID", this.props.post.id)
  this.props.classmateSelected(classmate)
  this.props.navigation.navigate('ClassmatesProfile')
}

addGoals(){
  console.log('GOAL ADDED', this.props.post.id)
  this.setState({
    goalAdded: !this.state.goalAdded
  })
}

updateNewComment(text){
  this.setState({
    newComment: text
  })
}

  submitComment = async () => {
    const { newComment } = this.state
    const studentProfileID = this.props.studentProfileID
    const postID = this.props.post.id
    try {
       const comment = await API.graphql(graphqlOperation(createComment, { input: { body: newComment, postID: postID, studentProfileID: studentProfileID }}))
        console.log('new comment!!!!', comment)
     
     }
     catch (err) {
      console.log('error addign up post: ', err)
    }
  
  console.log(newComment, "SPID", studentProfileID, "PID", postID )
  this.setState({
    newComment: "",
    openNew: false
  })
}
  


    render(){
      console.log("looking for is a video", this.state.comments)
     
        return(
      

this.state.isAVideo ? 
<View>
<TouchableOpacity onPress={() => this.goToStudentPage(this.props.post.student)}>
{/* <View style={{flex: 1}}>  */}

<View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}> 

<Image style={{ width: 30, height: 30, borderRadius: 15, paddingLeft: 20}} source={{uri: this.props.post.student.avatar}} />
<Text> {this.props.post.student.name} </Text>
</View>
</TouchableOpacity>
<VideoPlayer
  videoProps={{
    shouldPlay: false,
    
    resizeMode: Video.RESIZE_MODE_CONTAIN,
    source: {
      uri: this.props.post.url
    },
  }}
     inFullscreen={true}

/>  


<View style={{width: 100 + '%', height: 40, backgroundColor: '#c6bae0', flexDirection: 'row', alignItems: 'center'}}> 
  <TouchableOpacity  onPress={() => this.addGoals()}>
  {this.state.goalAdded? 
    <Icon name="bullseye" size={25} style={{paddingLeft: 10, paddingTop: 5, color: 'red'}}  /> :
    <Icon name="bullseye" size={20} style={{paddingLeft: 10, paddingTop: 5}}  /> }
  </TouchableOpacity> 
      {this.state.goalAdded? 
      <Text> Congratulations! You have a new goal! </Text> 
    : null }
  </View>
  
  
  {this.state.comments? this.state.comments.map(comment => {
    return(
      <Comment comment={comment} />
    )
    
  })
: null
}
  
  </View>

:




                <View>
                  
                <TouchableOpacity onPress={() => this.goToStudentPage(this.props.post.student)}>
                {/* <View style={{flex: 1}}>  */}
             
             <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}> 

      <Image style={{ width: 30, height: 30, borderRadius: 15, paddingLeft: 20}} source={{uri: this.props.post.student.avatar}} />
             <Text> {this.props.post.student.name} </Text>
             </View>
             </TouchableOpacity>

<TouchableOpacity onPress={() => console.log(this.props.post.id)}>
   <View> 
      <Image style={{height: 220, width: 100 + '%', justifyContent: 'center'}} source={{uri: this.props.post.url}}/>   
    </View>
</TouchableOpacity>

  <View style={{width: 100 + '%', height: 40, backgroundColor: '#c6bae0', flexDirection: 'row', alignItems: 'center'}}> 
  <TouchableOpacity  onPress={() => this.addGoals()}>
  {this.state.goalAdded? 
    <Icon name="bullseye" size={25} style={{paddingLeft: 10, paddingTop: 5, color: 'red'}}  /> :
    <Icon name="bullseye" size={20} style={{paddingLeft: 10, paddingTop: 5}}  /> }
  </TouchableOpacity> 
      {this.state.goalAdded? 
      <Text> Congratulations! You have a new goal! </Text> 
    : null }
  </View>
{/*   
  {this.props.post.comments.items.map(comment => {
    <Comment comment={comment} />
 })
 }  */}



              <TouchableOpacity onPress={() => this.openNewCommentForm()}> 
                <View style={{paddingTop: 10, paddingLeft: 20}}> 
                  <Text> 
                    Add a Comment
                  </Text>
                  {this.state.openNew ? 
                  <View style={{   flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',}}> 
                   <TextInput autoCorrect={true} value={this.state.newComment} onChangeText={(text) => this.updateNewComment(text)} placeholder="Comment" style={{width: 360, height: 50, backgroundColor:  'white', borderBottomColor: '#311B92', borderBottomWidth: 3 }} />
                   <TouchableOpacity onPress={() => this.submitComment()}>
                   <Icon name="paper-plane" size={25} style={{ paddingTop: 5, color: '#311B92'}}  />
                   </TouchableOpacity>
                   </View>
                  : null}
                </View>
              </TouchableOpacity>
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
    // ownerReceived: owner => dispatch(actions.ownerReceived(owner))
    classmateSelected: classmate => dispatch(actions.classmateSelected(classmate))

  };

};

export default connect(mapStateToProps, mapDispatchToProps)(PostwithNavigation)
;