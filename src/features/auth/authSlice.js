import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  authToken: localStorage.getItem("token") ?? "",
  authUser: JSON.parse(localStorage.getItem("authUser")) ?? {},
  authStatus: null,
  authError: null,
};

export const loginUser = createAsyncThunk(
  "/auth/loginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const signUpUser = createAsyncThunk(
  "/auth/signUpUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/auth/signup`, { userData });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducer: {
    logoutUser: (state) => {
      state.authToken = "";
      state.authUser = "";
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.authStatus = "pending";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.authStatus = "success";
      state.authToken = action.payload.encodedToken;
      state.authUser = action.payload.foundUser;
      localStorage.setItem("token", state.authToken);
      localStorage.setItem("authUser", JSON.stringify(state.authUser));
    },
    [loginUser.rejected]: (state, action) => {
      state.authStatus = "Error";
      state.authError = action.payload;
    },
    [signUpUser.pending]: (state) => {
      state.authStatus = "pending";
    },
    [signUpUser.fulfilled]: (state, action) => {
      state.authStatus = "success";
      state.authToken = action.payload.encodedToken;
      state.authUser = action.payload.foundUser;
      localStorage.setItem("token", state.authToken);
      localStorage.setItem("authUser", JSON.stringify(state.authUser));
    },
    [signUpUser.rejected]: (state, action) => {
      state.authStatus = "Error";
      state.authError = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { logoutUser } = authSlice.actions;
