import { configureStore } from "@reduxjs/toolkit";
import User from "../slices/user"; // example slice

export const store = configureStore({
  reducer: {
    User: User,
  },
});
