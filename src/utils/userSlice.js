import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      state.user = null;
    },
    removeToken: (state, action) => {
      state.token = null;
    },
    addToken: (state, action) => {
      state.token = action.payload;
    },
  },
});
export default userSlice.reducer;
export const { addUser, removeUser, removeToken, addToken } = userSlice.actions;
