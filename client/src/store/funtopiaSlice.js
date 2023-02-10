import { createSlice } from "@reduxjs/toolkit";

const funSlice = createSlice({
  name: "fun",
  initialState: {
    ticCount: 0,
    memoryCount: 0,
    quizCount: 0,
  },
  reducers: {
    getTicGameCount(state, action) {
      state.ticCount = action.payload;
    },
    getMemoryGameCount(state, action) {
      state.memoryCount = action.payload;
    },
  },
});

export const funActions = funSlice.actions;
export const funReducers = funSlice.reducer;
