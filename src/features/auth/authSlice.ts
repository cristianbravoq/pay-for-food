import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DataLog } from '../../common/files'

interface authState {
    Users: DataLog;
}

const initialState: authState = {
    Users: {
        nombre: '',
        iD_RESTAURANTE: 0,
    },
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSlice: (state, action: PayloadAction<DataLog>) => {
            state.Users = action.payload
            console.log(state.Users)
        }
    },
});

export const { loginSlice } = authSlice.actions;
export default authSlice.reducer;