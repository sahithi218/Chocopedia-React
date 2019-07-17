import produce from "immer";
import {
  GET_BRANDS,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_FAILURE
} from "../actionTypes/brands";

const brandsReducer = (
  prevState = { brands: [], isLoading: false },
  action
) => {
  return produce(prevState, draft => {
    switch (action.type) {
      case GET_BRANDS:
        draft.isLoading = true;
        break;

      case GET_BRANDS_SUCCESS:
        draft.isLoading = false;
        draft.brands = action.brands;
        break;
      case GET_BRANDS_FAILURE:
        draft.isLoading = false;
        draft.err = action.err;
        break;
    }
  });
};

export default brandsReducer;
