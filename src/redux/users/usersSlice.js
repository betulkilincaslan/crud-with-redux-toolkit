import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersAsync = createAsyncThunk(
  "users/getUsersAsync",
  async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/users`
    );
    return data;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    userItems: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getUsersAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUsersAsync.fulfilled]: (state, action) => {
      state.userItems = action.payload;
    },
    [getUsersAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const usersLoginData = (state) => {
  return state.users.userItems.map((user) => {
    let username = user.username;
    let password = user.phone;
    let loginData = { username, password };

    return loginData;
  });
};

export default usersSlice.reducer;
