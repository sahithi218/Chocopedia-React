import {
  GET_CHOCOLATES,
  GET_CHOCOLATES_SUCCESS,
  GET_CHOCOLATES_FAILURE,
  GET_CHOCOLATES_BYID_FAILURE,
  GET_CHOCOLATES_BYID_SUCCESS,
  GET_CHOCOLATES_BYID,
  SET_QUERY
} from "../actionTypes/search";

export function getChocolates() {
  return {
    type: GET_CHOCOLATES
  };
}

export function getChocolatesSuccess(chocs) {
  return {
    type: GET_CHOCOLATES_SUCCESS,
    chocs
  };
}

export function getChocolatesFailure(err) {
  return {
    type: GET_CHOCOLATES_FAILURE,
    err
  };
}

export function getChocolatesById(id) {
  return {
    type: GET_CHOCOLATES_BYID,
    id
  };
}

export function getChocolatesByIdSuccess(chocolate) {
  return {
    type: GET_CHOCOLATES_BYID_SUCCESS,
    chocolate
  };
}

export function getChocolatesByIdFailure(err) {
  return {
    type: GET_CHOCOLATES_BYID_FAILURE,
    err
  };
}

export function setQuery(query) {
  return {
    type: SET_QUERY,
    query
  };
}
