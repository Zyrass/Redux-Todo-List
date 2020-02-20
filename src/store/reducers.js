import * as actions from "./actions";

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

/**
 * -----------------------------------------------------------------------------
 * Reducers JAMAIS DIRECTEMENT utilisés par le store !
 * -----------------------------------------------------------------------------
 */
const todosReducer = (state, currentAction) => {

  switch ( currentAction.type ) {

    case actions.ADD_TODO:
      return [ ...state.todos, currentAction.todoo ];

    case actions.DELETE_TODO:
      return state.filter( (currentTodo, currentTodoIndex) => currentTodoIndex !== currentAction.index );

    case actions.TOGGLE_TODO:
      return state.map( ( currentTodo, currentTodoIndex ) => {

        if ( currentTodoIndex === currentAction.index ) {
          currentTodo.done = !currentTodo.doone;
        }
        return currentTodo;

      })
  
    default:
      return state;
  }
}

const filterReducer = (state, currentAction) => {
  
  switch ( currentAction.type ) {

    case actions.SET_FILTER:
      return currentAction.filter

    default:
      return state;

  }
}

/**
 * -----------------------------------------------------------------------------
 * Reducer uniquement utilisé par le store !
 * -----------------------------------------------------------------------------
 */
export const todoReducer = (state, currentAction) => {

  return {
    todos: todosReducer( state.todos, currentAction ),
    filter: filterReducer( state.filter, currentAction )
  }

}