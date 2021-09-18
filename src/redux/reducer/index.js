import { combineReducers } from "redux";
import starter from "./starter";

const rootReducer = (history) =>
  combineReducers({
    starter: starter,
  });

export default rootReducer;
