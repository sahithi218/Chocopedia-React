import produce from "immer";
import {
  GET_BRAND_BY_ID,
  GET_BRAND_BY_ID_SUCCESS,
  GET_BRANDS_BY_ID_FAILURE
} from "../actionTypes/brands";

const brandDetailsReducer = (
  prevState = { brand: {}, isLoading: false },
  action
) => {
  return produce(prevState, draft => {
    switch (action.type) {
      case GET_BRAND_BY_ID:
        draft.isLoading = true;
        break;
      case GET_BRAND_BY_ID_SUCCESS:
        draft.isLoading = false;
        draft.brand = action.brand;
        break;
      case GET_BRANDS_BY_ID_FAILURE:
        draft.isLoading = false;
        draft.err = action.err;
        break;
      default: //Do Nothing
    }
  });
};

export default brandDetailsReducer;
