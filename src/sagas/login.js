import { put } from "redux-saga/effects";
import { getUsersSuccess, getUsersFailure } from "../actionCreators/login";

export default function* loginSaga() {
  try {
    const loginResponse = yield fetch("http://localhost:4000/users");

    const users = yield loginResponse.json();
    yield put(getUsersSuccess(users));
  } catch (err) {
    yield put(getUsersFailure(err));
  }
}
