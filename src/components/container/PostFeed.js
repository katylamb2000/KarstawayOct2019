import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { Post } from "../presentation"

class PostFeed extends Component {

    constructor(props) {
        super(props)
     
}

    _renderPost(){
        return <Post />
        // <Post navigation={this.props.navigation} />
    }

    _returnKey(item) {
        return item.toString()
    }
    

    render(){
        return(
            <FlatList 
                data={[1,2,3,4,5]}
                keyExtractor={this._returnKey} 
                renderItem={this._renderPost}
            />
        )
    }
}
 
export default PostFeed