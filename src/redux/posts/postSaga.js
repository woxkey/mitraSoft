import { call, put } from "redux-saga/effects";
import axios from "axios";
import { getPostsFailure, getPostsSuccess } from "./postState";

function* postSaga(page) {
    try {
        console.log(page + "hello");
        
        const posts = yield call(() =>
            axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
        );
        const postsData = posts.data;
        yield put(getPostsSuccess(postsData));
    } catch (err) {
        yield put(getPostsFailure(err));
    }
}

export default postSaga;
