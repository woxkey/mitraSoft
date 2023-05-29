import { createSlice } from "@reduxjs/toolkit";

export const userPostsSlice = createSlice({
    name: "userPosts",
    initialState: {
        posts: [],
        isLoading: false,
    },
    reducers: {
        getUserPostsFetch: (state) => {
            state.isLoading = true;
        },
        getUserPostsSuccess: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            console.log(action.payload)
        },
        getUserPostsFailure: (state) => {
            state.isLoading = false;
        },
    },
});

export const { getUserPostsFetch, getUserPostsSuccess, getUserPostsFailure } = userPostsSlice.actions;

export default userPostsSlice.reducer;
