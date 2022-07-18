import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
