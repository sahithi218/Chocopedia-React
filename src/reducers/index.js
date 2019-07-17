import { combineReducers } from "redux";
import searchReducer from "./search";
import brandsReducer from "./brands";
import searchChocolateDetails from "./chocolate";
import brandDetailsReducer from "./brandDetaisReducer";
import loginReducer from "./login";
import signUpReducer from "./signup";

export const rootReducer = combineReducers({
  chocsState: searchReducer,
  brandsState: brandsReducer,
  chocDetails: searchChocolateDetails,
  brandDetails: brandDetailsReducer,
  loginState: loginReducer,
  signUpState: signUpReducer
});
