import produce from "immer";
import {
  GET_CHOCOLATES_SUCCESS,
  GET_CHOCOLATES,
  GET_CHOCOLATES_FAILURE,
  SET_QUERY
} from "../actionTypes/search";
const searchReducer = (prevState = { chocs: [], isLoading: false }, action) => {
  return produce(prevState, draft => {
    switch (action.type) {
      case GET_CHOCOLATES:
        draft.isLoading = true;
        break;
      case GET_CHOCOLATES_SUCCESS:
        draft.isLoading = false;
        draft.chocs = action.chocs;
        break;
      case GET_CHOCOLATES_FAILURE:
        draft.isLoading = false;
        draft.err = action.err;
        break;
      case SET_QUERY:
        draft.query = action.query;
        draft.isLoading = false;
        break;
    }
  });
};

export default searchReducer;
