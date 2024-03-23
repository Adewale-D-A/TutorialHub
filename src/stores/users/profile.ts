import { createSlice } from "@reduxjs/toolkit";

export const profile = createSlice({
  name: "user profile",
  initialState: {
    value: {
      status: false,
      username: "",
    },
  },
  reducers: {
    updateUsername: (state, action) => {
      state.value.username = action?.payload?.username;
    },
  },
});

export const { updateUsername } = profile.actions;

export default profile.reducer;
