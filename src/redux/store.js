"use client";
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slice/user";

const Store = configureStore({
  reducer: {
    userReducer,
  },
});

export default Store;
