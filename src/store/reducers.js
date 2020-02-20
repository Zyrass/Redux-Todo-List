/*
 * -----------------------------------------------------------------------------
 * SUPPOSONS QUE LE STATE RESSEMBLE A
 * -----------------------------------------------------------------------------
 *
 *          {
 *            filter: '',
 *            todos: []
 *          }
 * 
 * -----------------------------------------------------------------------------
 * ET QUE TODOS CONTIENT UN TABLEAU DE TODO QUI RESSEMBLE A
 * -----------------------------------------------------------------------------
 *
 *          {
 *            name: '',
 *            done: true
 *          }
 * 
 * -----------------------------------------------------------------------------
 */

import * as actions from "./actions";

export const todoReducer = (state, action) => {

  switch ( action.type ) {

    case actions.ADD_TODO:
      return {
        ...state,
        filter: [ ...state.todos, action.todoo ]
      }

      case actions.DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter( (currentTodo, currentTodoIndex) => currentTodoIndex !== action.index )
        }

      case actions.SET_FILTER:
        return {
          ...state,
          filter: action.filter
        }

      case actions.TOGGLE_TODO:
        return {
          ...state,
          todos: state.todos.map( ( currentTodo, currentTodoIndex ) => {

            if ( currentTodoIndex === action.index ) {
              currentTodo.done = !currentTodo.doone;
            }
            return currentTodo;

          })
        }
  
    default:
      return state
  }

}