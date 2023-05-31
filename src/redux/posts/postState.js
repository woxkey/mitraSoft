import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "user",
    initialState: {
        posts: [],
        isLoading: false,
        page: 1,
    },
    reducers: {
        getPostsFetch: (state) => {
            state.isLoading = true;
        },
        getPostsSuccess: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false
        },
           
        getPostsFailure: (state) => {
            state.isLoading = false;
        },
        sortPosts: (state) => {
            const sortedPosts = [...state.posts].sort((a, b) => (a.title > b.title ? 1 : -1));
            state.posts = sortedPosts;
        },
    },
});

export const { getPostsFetch, getPostsSuccess, getPostsFailure, sortPosts, sortPostsByInput } =
    postSlice.actions;

export default postSlice.reducer;
