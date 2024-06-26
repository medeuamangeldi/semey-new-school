import { createSlice } from "@reduxjs/toolkit";

interface loaderState {
  isLoading: boolean;
}

const initialState: loaderState = {
  isLoading: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = loaderSlice.actions;

export default loaderSlice.reducer;
