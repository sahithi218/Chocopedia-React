import produce from "immer";
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from "../actionTypes/login";

const loginReducer = (prevState = { res: {}, isLoading: false }, action) => {
  return produce(prevState, draft => {
    switch (action.type) {
      case GET_USERS:
        draft.isLoading = true;
        break;
      case GET_USERS_SUCCESS:
        draft.isLoading = false;
        draft.res = action.res;
        break;
      case GET_USERS_FAILURE:
        draft.isLoading = false;
        draft.err = action.err;
    }
  });
};

export default loginReducer;
