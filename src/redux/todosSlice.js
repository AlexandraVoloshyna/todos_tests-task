import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action) => {state.todos = action.payload},
    addTodo: (state, action) => {state.todos.unshift(action.payload)},
    deleteTodo:(state, action) => {state.todos = state.todos.filter(todo => todo.id !== action.payload)},
    toggleTodo: (state, action) => {
        const todo = state.todos.find((todo) => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
    },
    editTodo: (state, action ) => {
        const todo = state.todos.find((todo) => todo.id === action.payload.id);
        if (todo) {
          todo.title = action.payload.title || todo.title
        }
      },

  },
})

export const { setTodos, addTodo, deleteTodo,toggleTodo, editTodo } = todosSlice.actions

export default todosSlice.reducer