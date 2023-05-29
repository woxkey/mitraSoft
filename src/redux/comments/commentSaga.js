import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getCommentsSuccess } from "./commentState";

function* workGetCommentsFetch() {
    const comments = yield call(() => axios.get("https://jsonplaceholder.typicode.com/comments"));
    const commentsData = comments.data;
    yield put(getCommentsSuccess(commentsData));
}

function* commentSaga() {
    yield takeEvery("comments/getCommentsFetch", workGetCommentsFetch);
}

export default commentSaga;
