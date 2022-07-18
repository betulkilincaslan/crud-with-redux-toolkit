import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/todos`
    );
    return data;
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todoItems: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    toggleCompleted: (state, action) => {
      const { id } = action.payload;
      const toggledItem = state.todoItems.find((todo) => todo.id === id);
      toggledItem.completed = !toggledItem.completed;
    },
  },
  extraReducers: {
    [getTodosAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      state.todoItems = action.payload;
      state.isLoading = false;
    },
    [getTodosAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const todoData = (state) => state.todos.todoItems;
export const { toggleCompleted } = todosSlice.actions;
export default todosSlice.reducer;
