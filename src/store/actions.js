/* 
 * -----------------------------------------------------------------------------
 * CONSTANTE UNIQUE - (pour éviter toute erreur de typographie)
 * -----------------------------------------------------------------------------
*/
export const ADD_TODO    = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SET_FILTER  = "SET_FILTER";
export const TOGGLE_TODO = "TOGGLE_TODO";

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
