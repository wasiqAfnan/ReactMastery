// step1: configure store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterFeature"; // step4: exporting the created reducer from the counterFeature file

export default configureStore({
  reducer: {
    counter: counterReducer,  // step5: pass it to the store so that it can have access of all the reducer
  },
});
