import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { loading: "idle", users: [] },
  reducers: {
    userLoading(state, action) {
      // Use a "state machine" approach for loading state instead of booleans
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    userSuccess(state, action) {
      if (state.loading === "pending") {
        state.loading = "idle";
      }
      state.users = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export const uiReducers = uiSlice.reducer;