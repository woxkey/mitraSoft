import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        isLoading: false,
    },
    reducers: {
        getUserFetch: (state) => {
            state.isLoading = true;
        },
        getUserSuccess: (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        },
        getUserFailure: (state) => {
            state.isLoading = false;
        },
    },
});

export const { getUserFetch, getUserSuccess, getUserFailure } = userSlice.actions;

export default userSlice.reducer;
