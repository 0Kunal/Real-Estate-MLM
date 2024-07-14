import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (model, thunkApi) => {
    try {
      let res;
      return res?.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getUserById = createAsyncThunk(
  "user/getUserById",
  async (model, thunkApi) => {
    try {
      let res;
      return res?.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const createUser = createAsyncThunk(
  "user/createUser",
  async (model, thunkApi) => {
    try {
      let res;
      return res?.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (model, thunkApi) => {
    try {
      let res;
      return res?.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (model, thunkApi) => {
    try {
      let res;
      return res?.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
