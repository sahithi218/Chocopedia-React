import produce from "immer";
import {
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE
} from "../actionTypes/signup";
const signUpReducer = (
  prevState = { signedUp: false, isLoading: false },
  action
) => {
  return produce(prevState, draft => {
    switch (action.type) {
      case ADD_USER:
        draft.isLoading = true;
        draft.user = action.user;
        draft.signedUp = false;
        break;
      case ADD_USER_SUCCESS:
        draft.isLoading = false;
        draft.signedUp = true;
        break;
      case ADD_USER_FAILURE:
        draft.isLoading = false;
        draft.signedUp = false;
        break;
    }
  });
};

export default signUpReducer;
