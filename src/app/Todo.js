import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch
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
    console.warn(JSON.stringify(this.state, null, 2));
    this.setState({todos, newTodo: ""})
  }
  
  render() {
    return (
      <View style = {styles.container}>
        <Switch />
        <View style={styles.form}>
          <TextInput
            style = {styles.input}
            value={this.state.newTodo}
            onChangeText={this.handleChange.bind(this)}
            />
          <TouchableOpacity
            style = {styles.button}
            onPress={this.handlePress.bind(this)}>
              <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        
        <View style = {styles.todos}>
          {this.state.todos.map((todo, i) => 
            <View style = {styles.todo} key={i}>
              <Text style = {styles.todoText}>{todo}</Text>
            </View>
            )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  form: {
//     flex: 1,
    flexDirection: 'row'
  },
  input: {
    flex: 0.7,
    fontSize: 24,
    
  },
  button: {
    flex: 0.3,
    height: 50,
    borderWidth: 1,
    borderColor: 'lightblue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  todos: {
    marginTop: 60,
    
  },
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  todoText: {
    fontSize: 24
  }
})

