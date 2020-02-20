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
export const todosReducer = (state = [], currentAction) => {

  switch ( currentAction.type ) {

    case actions.ADD_TODO:
      return [ ...state.todos, currentAction.todoo ];

    case actions.DELETE_TODO:
      return state.filter(( currentTodo, currentTodoIndex ) => 
        currentTodoIndex !== currentAction.index
      );

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

export const filterReducer = (state = actions.visibilityFilters.SHOW_ALL, currentAction) => {
  
  switch ( currentAction.type ) {

    case actions.SET_FILTER:
      return currentAction.filter

    default:
      return state;

  }
}
