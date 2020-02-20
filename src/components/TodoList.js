import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { visibilityFilters, toggleTodo, deleteTodo } from '../store/actions';

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul className="list-group">
      { todos && todos.map( (currentTodo, currentIndex) => (
        <TodoItem 
          key={ currentTodo.name } 
          todo={ currentTodo } 
          deleteTodo={ () => deleteTodo(currentIndex) } 
          toggleTodo={ () => toggleTodo(currentIndex) }
        />
      )) }
    </ul>
  )
}

/**
 * 1er argument de connect correspond à mapStateToProps
 */
export default connect((state) => {

  const filter = state.filter;
  let todos;
  switch ( filter ) {
    case visibilityFilters.SHOW_DONE:
      todos = state.todos.filter( currentTodo => currentTodo.done )
      break;
    case visibilityFilters.SHOW_ACTIVE:
      todos = state.todos.filter( currentTodo => !currentTodo.done )
      break;
    default:
      todos = state.todos
      break;
  }
  return { todos };
}, {
  toggleTodo,
  deleteTodo
})(TodoList);