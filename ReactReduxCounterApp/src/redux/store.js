// step1: configure store
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counterFeature";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
