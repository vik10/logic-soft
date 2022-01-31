import { createSlice } from "@reduxjs/toolkit";

const HomeSlice = createSlice({
  name: "HomeSlice",
  initialState: {
    ApiData: [],
    searchText: "",
  },
  reducers: {
    handleApiData: (state, action) => {
      state.ApiData = action.payload;
    },
    handleSearchInput: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { handleApiData, handleSearchInput } = HomeSlice.actions;

export default HomeSlice.reducer;
