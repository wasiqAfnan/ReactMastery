// step3: Create a slice or feature
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (prevState) => {
      prevState.value += 1;
    },
    decrement: (prevState) => {
      prevState.value -= 1;
    },

    // Step:8 action is an arg passed from other file to provide any addional data to the reducer function
    // action.payload holds the actual value passed from other files to the reducer fucntion
    incrementByAmount:(prevState, action) =>{
        prevState.value += action.payload
    }
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions // exporting individual functions/reducers to disptch in another files

export default counterSlice.reducer; // exporting all the reducer from the above slice to use or to pass all in the store
