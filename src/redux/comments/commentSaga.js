import { call, put } from "redux-saga/effects";
import axios from "axios";
import { getCommentsFailure, getCommentsSuccess } from "./commentState";

function* commentSaga(postId) {
    try {
        const comments = yield call(() =>
            axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        );
        const commentsData = comments.data;
        yield put(getCommentsSuccess(commentsData));
    } catch (err) {
        yield put(getCommentsFailure(err));
    }
}

export default commentSaga;
