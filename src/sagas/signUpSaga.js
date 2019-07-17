import { put } from "redux-saga/effects";
import { addUserSuccess, addUserFailure } from "../actionCreators/signup";

export default function* signUpSaga(action) {
  try {
    const signUpResponse = yield fetch(`http://localhost:4000/users/`, {
      method: "POST",
      body: JSON.stringify(action.user),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const res = yield signUpResponse.json();
    yield put(addUserSuccess(res));
  } catch (err) {
    yield put(addUserFailure(err));
  }
}
