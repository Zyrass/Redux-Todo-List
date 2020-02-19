import React, { Component } from 'react';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import AddTodo from './components/AddTodo';

class App extends Component {

  render() {
    return (
      <div className="container p-5" >

        <h4>Ajouter une todo</h4>
        <hr className="my-4" />

        <AddTodo />

        <hr className="my-4" />

        <div className="card" >

          <div className="card-header d-flex flex-row align-items-center" >
            <span className="flex-fill">Todo List</span>
            <Filter />
          </div>

          <div className="card-body" >
            <TodoList />
          </div>

        </div>

      </div>
    );
  }

}

export default App;
