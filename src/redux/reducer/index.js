import { combineReducers } from "redux";
import starter from "./starter";
import { connectRouter } from "connected-react-router";

const rootReducer = (history) =>
  combineReducers({
    starter,
    router: connectRouter(history),
  });

export default rootReducer;
