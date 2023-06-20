import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthorized: false,
  user:null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  
    setLogin: (state, action) => {
      state.isAuthorized = true;
      state.user=action.payload.user;
    
    },
    setLogout: (state) => {

      state.isAuthorized = false ;
      state.user=null
    },
    
  },
});

export const { setLogin, setLogout } =authSlice.actions;
export default authSlice.reducer;