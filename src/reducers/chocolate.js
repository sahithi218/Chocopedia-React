import produce from "immer";
import {
  GET_CHOCOLATES_BYID,
  GET_CHOCOLATES_BYID_SUCCESS,
  GET_CHOCOLATES_BYID_FAILURE
} from "../actionTypes/search";
const searchChocolateDetails = (
  prevState = { chocolate: {}, isLoading: false },
  action
) => {
  return produce(prevState, draft => {
    switch (action.type) {
      case GET_CHOCOLATES_BYID:
        draft.isLoading = true;
        break;
      case GET_CHOCOLATES_BYID_SUCCESS:
        draft.chocolate = action.chocolate;
        draft.isLoading = false;
        break;
      case GET_CHOCOLATES_BYID_FAILURE:
        draft.isLoading = false;
        draft.err = action.err;
        break;
    }
  });
};

export default searchChocolateDetails;
