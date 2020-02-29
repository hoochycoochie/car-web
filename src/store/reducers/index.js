import { combineReducers } from "redux";
import { user } from "./user";
import { cars } from "./car";

const rootReducer = combineReducers({
  user,
  cars
});

export default rootReducer;
