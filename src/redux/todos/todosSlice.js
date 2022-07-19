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

export const addTodosAsync = createAsyncThunk(
  "todos/addTodosAsync",
  async (newTodo) => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/todos`,
      newTodo
    );
    return data;
  }
);

export const deleteTodosAsync = createAsyncThunk(
  "todos/deleteTodosAsync",
  async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/todos/${id}`);
    return id;
  }
);

export const updateTodosAsync = createAsyncThunk(
  "todos/updateTodosAsync",
  async (updatedTodo) => {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/todos/${updatedTodo.id}`,
      updatedTodo
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
    addNewTodo: {
      isLoading: false,
      error: false,
    },
  },
  reducers: {
    toggleCompleted: (state, action) => {
      const { id } = action.payload;
      const index = state.todoItems.findIndex((todo) => todo.id === id);
      state.todoItems[index].completed = !state.todoItems[index].completed;
    },
  },
  extraReducers: {
    // get todos
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
    // add new todo
    [addTodosAsync.pending]: (state, action) => {
      state.addNewTodo.isLoading = true;
    },
    [addTodosAsync.fulfilled]: (state, action) => {
      state.todoItems.push(action.payload);
      state.addNewTodo.isLoading = false;
    },
    [addTodosAsync.rejected]: (state, action) => {
      state.addNewTodo.isLoading = false;
      state.addNewTodo.error = action.error.message;
    },
    // delete new todo
    [deleteTodosAsync.fulfilled]: (state, action) => {
      const id = action.payload;
      const filtredTodos = state.todoItems.filter(
        (todoItem) => todoItem.id !== id
      );
      state.todoItems = filtredTodos;
    },
    // update todo
    [updateTodosAsync.fulfilled]: (state, action) => {
      const id = action.payload.id;
      const index = state.todoItems.findIndex((todoItem) => todoItem.id === id);
      state.todoItems[index] = action.payload;
    },
  },
});

export const todoData = (state) => state.todos.todoItems;
export const { toggleCompleted } = todosSlice.actions;
export default todosSlice.reducer;
