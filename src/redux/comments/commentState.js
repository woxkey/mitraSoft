import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
    name: "comments",
    initialState: {
        comments: [],
        isLoading: false,
    },
    reducers: {
        getCommentsFetch: (state) => {
            state.isLoading = true;
        },
        getCommentsSuccess: (state, action) => {
            //const { postId, comments } = action.payload;
            //state.comments = { ...state.comments, [postId]: comments };
            //state.comments = action.payload;
            state.comments = action.payload;
            state.isLoading = false;
        },

        getCommentsFailure: (state) => {
            state.isLoading = false;
        },
    },
});

export const { getCommentsFetch, getCommentsSuccess, getCommentsFailure } = commentSlice.actions;

export default commentSlice.reducer;
