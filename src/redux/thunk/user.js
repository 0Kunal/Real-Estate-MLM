import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../../firebaseConfig";

export const login = createAsyncThunk("user/login", async (model, thunkApi) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      model.email,
      model.password
    );
    return userCredential.user;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (model, thunkApi) => {
    try {
      const querySnapshot = await getDocs(collection(db, "user"));
      let res = [];
      querySnapshot.forEach((doc) => {
        res.push({ uid: doc.id, ...doc.data() });
      });
      return res;
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
