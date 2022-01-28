import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoItem {
  id: number;
  completed: boolean;
  text: string;
}

const initialState: TodoItem[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<TodoItem>) {
      state.push(action.payload);
    },
    deleteTodo(state, action: PayloadAction<TodoItem>) {
      state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
