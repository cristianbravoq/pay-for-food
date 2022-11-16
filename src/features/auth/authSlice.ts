import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from '../../common/files'

interface authState {
    Users: User;
}

const initialState: authState = {
    Users: {
        usuario: '',
        contraseña: '',
    },
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSlice: (state, action: PayloadAction<User>) => {
            state.Users = action.payload
            console.log(state.Users)
        }
    },
});

export const { loginSlice } = authSlice.actions;
export default authSlice.reducer;