import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setUser: (state, action) => {
      if (action.payload) {
        state.user = {
          email: action.payload.email,
          password: action.payload.password,
        };
      } else {
        state.user = null;
      }
    },
  },
});

export const { setMode, setUser } = authSlice.actions;
const reduce = authSlice.reducer;
export default reduce;
