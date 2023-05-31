import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './redux/posts/postState.js';
import userReducer from './redux/users//userState.js'
import userPostsReducer from './redux/users/userPostsState.js';


export const saga = createSagaMiddleware();
export const commentSagaMid = createSagaMiddleware();
export const userSaga = createSagaMiddleware();
export const userPostsSaga = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        user: userReducer,
        userPosts: userPostsReducer
    },
    middleware: [saga, commentSagaMid, userSaga, userPostsSaga],
});
