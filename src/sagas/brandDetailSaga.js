import { put } from "redux-saga/effects";
import {
  getBrandByIdSuccess,
  getBrandByIdFailure
} from "../actionCreators/brands";

export default function* brandDetailSaga(action) {
  try {
    const brandResponse = yield fetch(
      `http://localhost:4000/chocolates?brandId=${action.id}`
    );
    const brand = yield brandResponse.json();
    yield put(getBrandByIdSuccess(brand));
  } catch (err) {
    yield put(getBrandByIdFailure(err));
  }
}
