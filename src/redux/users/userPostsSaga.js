import { call, put } from "redux-saga/effects";
import axios from "axios";
import { getUserPostsFailure, getUserPostsSuccess } from "./userPostsState";

function* myUserPostsSaga(id) {
    try {
        const userPosts = yield call(() =>
            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        );
        const userPostsData = userPosts.data;
        yield put(getUserPostsSuccess(userPostsData));
    } catch (err) {
        yield put(getUserPostsFailure(err));
    }
}

export default myUserPostsSaga;
