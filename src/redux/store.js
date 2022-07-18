import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todos/todosSlice";
import usersSlice from "./users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    todos: todosSlice,
  },
});
