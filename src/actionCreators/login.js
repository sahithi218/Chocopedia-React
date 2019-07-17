import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from "../actionTypes/login";

export const getUsers = () => {
  return {
    type: GET_USERS
  };
};

export const getUsersSuccess = res => {
  return {
    type: GET_USERS_SUCCESS,
    res
  };
};

export const getUsersFailure = err => {
  return {
    type: GET_USERS_FAILURE,
    err
  };
};
