import { call, put } from "redux-saga/effects";
import axios from "axios";
import { getUserFailure, getUserSuccess } from "./userState";

function* myUserSaga(id) {
    try {
        const user = yield call(() =>
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        );
        const userData = user.data;
        yield put(getUserSuccess(userData));
    } catch (err) {
        yield put(getUserFailure(err));
    }
}

export default myUserSaga;
