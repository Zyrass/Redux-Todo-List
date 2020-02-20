const ADD_TODO    = "add_todo";
const DELETE_TODO = "delete_todo";
const SET_FILTER  = "set_filter";
const TOGGLE_TODO = "toggle_todo";

export const visibilityFilters = {
  SHOW_ALL: 'show_all',
  SHOW_DONE: 'show_done',
  SHOW_ACTIVE: 'show_active'
}

export const addTodo = ( todo ) => {
  return {
    type: ADD_TODO,
    todo
  }
}

export const deleteTodo = ( index ) => {
  return {
    type: DELETE_TODO,
    index
  }
}

export const setFilter = ( filter ) => {
  return {
    type: SET_FILTER,
    filter
  }
}

export const toggleTodo = ( index ) => {
  return {
    type: TOGGLE_TODO,
    index
  }
}