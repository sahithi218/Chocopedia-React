import { put } from "redux-saga/effects";
import {
  getChocolatesByIdSuccess,
  getChocolatesByIdFailure
} from "../actionCreators/search";

export default function* chocolateSaga(action) {
  try {
    const chocolateResponse = yield fetch(
      `http://localhost:4000/chocolates/${action.id}`
    );

    const chocolate = yield chocolateResponse.json();
    yield put(getChocolatesByIdSuccess(chocolate));
  } catch (err) {
    yield put(getChocolatesByIdFailure(err));
  }
}
