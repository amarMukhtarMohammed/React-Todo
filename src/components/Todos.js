import React, { Component } from 'react';
import TodoItem  from './TodoItem';

class Todos extends Component {
  render() { 
      return (this.props.todos.map((todos =>
          <TodoItem key={todos.id} todo={todos}/>
      ))
    );
  }
}

export default Todos;