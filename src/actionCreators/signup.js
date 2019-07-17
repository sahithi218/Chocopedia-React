import {
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE
} from "../actionTypes/signup";

export const addUser = user => {
  return {
    type: ADD_USER,
    user
  };
};

export const addUserSuccess = res => {
  return {
    type: ADD_USER_SUCCESS,
    signedUp: true
  };
};

export const addUserFailure = err => {
  return {
    type: ADD_USER_FAILURE,
    signedUp: false
  };
};
