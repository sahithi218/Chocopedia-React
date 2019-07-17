import { put } from "redux-saga/effects";
import { getBrandsFailure, getBrandsSuccess } from "../actionCreators/brands";

export default function* brandsSaga() {
  try {
    const brandsResponse = yield fetch("http://localhost:4000/brands");
    const brands = yield brandsResponse.json();
    yield put(getBrandsSuccess(brands));
  } catch (err) {
    yield put(getBrandsFailure(err));
  }
}
