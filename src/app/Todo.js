import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }
  
  handleChange(text) {
    this.setState({newTodo: text})
  }
  
  handlePress() {
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ""})
  }
  
  render() {
    return (
      <View>
        <TextInput
          value={this.state.newTodo}
          onChangeText={this.handleChange.bind(this)}
          />
        
        <TouchableOpacity
          onPress={this.handlePress.bind(this)}>
            <Text>Add</Text>
        </TouchableOpacity>
        <View>
          {this.state.todos.map((todo, i) => 
            <Text key={i}>{todo}</Text>)}
        </View>
      </View>
    )
  }
}