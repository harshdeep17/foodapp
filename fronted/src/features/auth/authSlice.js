import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loginUser, registerUser } from './authAPI';

const initialState = {
  currUser: {},
  status: "pending",
  registerStatus: false,
  loginStatus: false,
  loginMsg:"",
  registerMsg:"",
  logoutStatus:true
}

export const registerUserAsync = createAsyncThunk(
    'auth/registeruser',
    async (user) => {
      const {data} = await registerUser(user);
      return data;
    }
)

export const loginUserAsync = createAsyncThunk(
    'auth/loginuser',
    async (user) => {
      const {data} = await loginUser(user);
      return data;
    }
)
  
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser(state){
        state.currUser= {};
        state.status= "idle";
        state.registerStatus= false;
        state.loginStatus= false;
        state.logoutStatus= true;
        state.loginMsg="";
        state.registerMsg="";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.registerStatus = action.payload.status;
        state.loginStatus = action.payload.status;
        state.registerMsg = action.payload.msg;
        if(action.payload.status){
            state.currUser = action.payload.user;
            state.logoutStatus= false;
        }
      })
      .addCase(loginUserAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.registerStatus = action.payload.status;
        state.loginStatus = action.payload.status;
        state.registerMsg = action.payload.msg;
        if(action.payload.status){
            state.currUser = action.payload.user;
            state.logoutStatus= false;
        }
      })
  },
})

export const {logoutUser} = authSlice.actions

export default authSlice.reducer

