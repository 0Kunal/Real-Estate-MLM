import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, getUserById } from "../thunk/user";

const initState = {
  loading: false,
  users: [],
  selectedUser: {},
};

const UserSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getUserById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedUser = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default UserSlice.reducer;
