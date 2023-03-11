import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null
  },
  reducers: {
    createUser: function (state, action) {
      state.user = action.payload
    },
    removeUser: function (state, action) {
      state.user = null
    }
  },
});


export const { createUser, removeUser } = userSlice.actions;
export const selectUser = (state: any) => state.user.user;
export default userSlice.reducer;
