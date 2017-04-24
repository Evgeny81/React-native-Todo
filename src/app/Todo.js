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
  
  componentWillMount() {//Getting data from server
    fetch('http://192.168.0.100:3000/todos', {//localhost did't work, I don't know why
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(todos => this.setState({todos}))
  }
   
  handleChange(text) {
    this.setState({newTodo: text})
  }
  
  handlePress() {//Post data to server
    fetch('http://192.168.0.100:3000/todos',{
      method: 'post',
      body: JSON.stringify({//Always stringify body
        name: this.state.newTodo
      }),
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .catch(error => console.warn("fetch error:", error))
    .then(res => res.json())
    .then(data => {
      const todos = [...this.state.todos, data];
      this.setState({todos, newTodo: ""});
    })

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
              <Text style = {styles.todoText}>{todo.name}</Text>
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

