import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DataLog } from '../../common/files'

interface authState {
    Users: DataLog;
}

const initialState: authState = {
    Users: {
        iD_RESTAURANTE: 0,
        nombre: '',
    },
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSlice: (state, action: PayloadAction<any>) => {
            state.Users = action.payload
            console.log(state.Users)
        }
    },
});

export const { loginSlice } = authSlice.actions;
export default authSlice.reducer;