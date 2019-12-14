import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO, SHOW_ALL, 
	SHOW_COMPLETED, SHOW_ACTIVE, CLEAR_TODO } from './actionsType'

{/* Actions creators Section
  -Recieve data from the DOM event then format to JSON.
  -Action change the state by dispatching an action to the store.


*/}

let TodoId = 2

export const addTodo = text => ({
    type: ADD_TODO,
    todoId: TodoId++,
    todoText: text,
    completed: false,
    isVisible: true
})


export const deleteTodo = id => ({
    type: DELETE_TODO,
    todoId: id
})


export const editTodo = (id, text) => ({
	type: EDIT_TODO,
	todoId: id,
    todoText: text,
	completed: false,
	isVisible: true
})


export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    todoId: id
})


export const showAll = () => {
  return {
    type: SHOW_ALL
  }
}


export const showActive = () => {
  return {
    type: SHOW_ACTIVE
  }
}


export const showCompleted = () => {
  return {
    type: SHOW_COMPLETED
  }
}


export const clearTodo = () => {
  return {
    type: CLEAR_TODO
  }
}

{ /* User interacts with UI, triggers an action. Here, the actions creators 
that are functions that create actions */}