import { createSlice } from "@reduxjs/toolkit";

const serachSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    results: [],
    error: null,
    isLoading: false,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
      state.isLoading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setSearchTerm, setResults, setError, setIsLoading } =
  serachSlice.actions;

export default serachSlice.reducer;
