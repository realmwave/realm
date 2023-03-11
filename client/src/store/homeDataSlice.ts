import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "homeData",
  initialState: {
    homeData: null
  },
  reducers: {
    createHomeData: function (state, action) {
      state.homeData = action.payload
    },
    removeHomeData: function (state, action) {
      state.homeData = null
    }
  },
});


export const { createHomeData, removeHomeData } = userSlice.actions;
export const selectHomeData = (state: any) => state.homeData.homeData;
export default userSlice.reducer;

