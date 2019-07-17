import { all, takeLatest } from "redux-saga/effects";
import { GET_CHOCOLATES, GET_CHOCOLATES_BYID } from "../actionTypes/search";
import searchChocolatesSaga from "./searchSaga";
import { GET_BRANDS, GET_BRAND_BY_ID } from "../actionTypes/brands";
import brandsSaga from "./brandsSaga";
import chocolateSaga from "./chocolateSaga";
import brandDetailSaga from "./brandDetailSaga";
import { GET_USERS } from "../actionTypes/login";
import loginSaga from "./login";
import { ADD_USER } from "../actionTypes/signup";
import signUpSaga from "./signUpSaga";

export default function* watcherSaga() {
  yield all([
    takeLatest(GET_CHOCOLATES, searchChocolatesSaga),
    takeLatest(GET_BRANDS, brandsSaga),
    takeLatest(GET_CHOCOLATES_BYID, chocolateSaga),
    takeLatest(GET_BRAND_BY_ID, brandDetailSaga),
    takeLatest(GET_USERS, loginSaga),
    takeLatest(ADD_USER, signUpSaga)
  ]);
}
