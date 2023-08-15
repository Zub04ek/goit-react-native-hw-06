import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userId: null,
    userName: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
//   extraReducers: builder =>
//     builder
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       }),
});
