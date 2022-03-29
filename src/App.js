import React, { Component } from 'react';
import './App.js';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: '1 st Todo!',
        completed: false
      },
       {
        id: 2,
        title: '2nd Todo!',
        completed: false
      },
        {
        id: 3,
        title: '3rd Todo!',
        completed: false
      }
    ]
  }
  render() {  
    return (
      <div className='App'>
        <Todos todos={this.state.todos} />            {/* passing in the individual todos therefore becoming a prop */}
        {/* The data comes from the state of app.js and is passed to Todos as props */}
        {/* mapping = return an array from an array */}
      </div> 
    ); 
  }
}

export default App;