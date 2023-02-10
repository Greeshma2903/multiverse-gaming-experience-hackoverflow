import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAutheticated: false },
  reducers: {
    login(state) {
      state.isAutheticated = true;
    },
    logout(state) {
      state.isAutheticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducers = authSlice.reducer;

// actions------------------->
const fetchUsers = () => async (dispatch) => {
  dispatch(uiActions.userLoading());
//   const response = await usersAPI.fetchAll();
//   dispatch(uiActions.userSuccess(response.data));
};
