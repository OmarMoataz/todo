import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.name = action.payload.name;
        }
        return todo;
      })
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer