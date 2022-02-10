import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

const initialState: TodoItem[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo = {
        id: new Date().toString(),
        text: action.payload.text,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo?.completed;
      }
    },
    deleteTodo(state, action) {
      state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
