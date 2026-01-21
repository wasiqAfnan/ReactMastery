// step3: Create a slice or feature
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (prevState) => {
      prevState += 1;
    },
    decrement: (prevState) => {
      prevState += 1;
    },
  },
});

export const {increment, decrement} = counterSlice.actions // exporting individual functions/reducers to disptch in another files

export default counterSlice.reducer; // exporting all the reducer from the above slice to use or to pass all in the store
