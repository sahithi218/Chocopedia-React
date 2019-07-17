import {
  GET_BRANDS,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_FAILURE,
  GET_BRAND_BY_ID,
  GET_BRAND_BY_ID_SUCCESS,
  GET_BRANDS_BY_ID_FAILURE
} from "../actionTypes/brands";

export const getBrands = () => {
  return {
    type: GET_BRANDS
  };
};

export const getBrandsSuccess = brands => {
  return {
    type: GET_BRANDS_SUCCESS,
    brands
  };
};

export const getBrandsFailure = err => {
  return {
    type: GET_BRANDS_FAILURE,
    err
  };
};

export const getBrandById = id => {
  return {
    type: GET_BRAND_BY_ID,
    id
  };
};

export const getBrandByIdSuccess = brand => {
  return {
    type: GET_BRAND_BY_ID_SUCCESS,
    brand
  };
};

export const getBrandByIdFailure = err => {
  return {
    type: GET_BRANDS_BY_ID_FAILURE,
    err
  };
};
