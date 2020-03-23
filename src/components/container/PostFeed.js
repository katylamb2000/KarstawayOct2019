import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { Post } from "../presentation"
import { API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../../../aws-exports';
API.configure(awsmobile)    
import { listPosts } from "../../graphql/queries"

class PostFeed extends Component {

    constructor(props) {
        super(props)
     
}

componentDidMount(){
    this.listQuery()
}

listQuery = async () => {

const allPosts = await API.graphql(graphqlOperation(listPosts))
console.log("ALL POSTS!!!!!!", allPosts)
this.setState({
    allPosts: allPosts.data.listStudentProfiles.items
    
}
)

}


    _renderPost(){

        {this.state.allPosts ?
            this.state.allPosts.map(post => {
            return <Post key={post.id} post={post}/>
        }) : null }
        
        // <Post navigation={this.props.navigation} />
    }

    _returnKey(item) {
        return item.toString()
    }
    

    render(){
        return(
            <FlatList 
                // data={[1,2,3,4,5]}
                data={this.state.allPosts}
                keyExtractor={this._returnKey} 
                renderItem={this._renderPost}
            />
        )
    }
}
 
export default PostFeed