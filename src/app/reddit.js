import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

export class Reddit extends Component {
  
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }
  componentWillMount(){
    fetch('https://www.reddit.com/.json',{//Get request by default, shorthand, method type should be written in the other way
      Accept: 'application/json'
    })
    .then(res => res.json())
    .then(data => {
      this.setState({posts: data.data.children})
    })
  }
  render() {
    return (
      <View>
        <Text>
          Reddit
        </Text>
        <View>
          {this.state.posts.map((post,i) => (
            <Text key={i}>{post.data.author}</Text>
          ))}
        </View>
      </View>
    )
  }
}