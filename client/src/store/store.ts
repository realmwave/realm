import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import homeDataReducer from "./homeDataSlice";


export default configureStore({
  reducer: {
    user: userReducer,
    homeData: homeDataReducer,
  },
});

