import {configureStore} from '@reduxjs/toolkit';
import todoSlice from './slices/TodoSlice';

export const store = configureStore({
    reducer: todoSlice
})

// Storing data to localstorage to persist data on page load
store.subscribe(() => {
    localStorage.setItem("todos", JSON.stringify(store.getState().todos));
});