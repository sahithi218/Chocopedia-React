import { put } from "redux-saga/effects";
import {
  getChocolatesSuccess,
  getChocolatesFailure
} from "../actionCreators/search";
export default function* searchChocolatesSaga() {
  try {
    const chocsResponse = yield fetch(`http://localhost:4000/chocolates`);
    const chocs = yield chocsResponse.json();
    yield put(getChocolatesSuccess(chocs));
  } catch (err) {
    yield put(getChocolatesFailure(err));
  }
}
