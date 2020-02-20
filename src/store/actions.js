/* 
 * -----------------------------------------------------------------------------
 * CONSTANTE UNIQUE - (pour éviter toute erreur de typographie)
 * -----------------------------------------------------------------------------
*/
export const ADD_TODO = 'add todo';
export const DELETE_TODO = 'delete todo';
export const SET_FILTER = 'set filter';
export const TOGGLE_TODO = 'toggle todo';

export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_DONE: 'SHOW_DONE',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/* 
 * -----------------------------------------------------------------------------
 * ACTION CREATORS - (exporter pour les ré-utiliser dans les reducers)
 * -----------------------------------------------------------------------------
*/
export const addTodo = ( todo ) => {
  return {
    type: ADD_TODO,
    todo // Payload
  }
}

export const deleteTodo = ( index ) => {
  return {
    type: DELETE_TODO,
    index // Payload
  }
}

export const setFilter = ( filter ) => {
  return {
    type: SET_FILTER,
    filter // Payload
  }
}

export const toggleTodo = ( index ) => {
  return {
    type: TOGGLE_TODO,
    index // Payload
  }
}
