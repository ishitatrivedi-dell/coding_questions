import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    counter: 0,
    todos: []
  },
  reducers: {
    // Counter actions
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    reset: (state) => {
      state.counter = 0;
    },

    // Todo actions
    addTodo: (state, action) => {
      state.todos.push({ id: Date.now(), text: action.payload });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    }
  }
});

export const {
  increment,
  decrement,
  reset,
  addTodo,
  deleteTodo
} = appSlice.actions;

export default appSlice.reducer;
