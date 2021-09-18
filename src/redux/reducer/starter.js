import { PRE_LOAD_DATA, LOAD_DATA } from "../actions/type";

export default function starter(state = { loading: false, data: {} }, action) {
  switch (action.type) {
    case PRE_LOAD_DATA:
      return { ...state, loading: true };
    case LOAD_DATA:
      console.log(action);
      return { ...state, data: action.data, loading: false };
    default:
      return state;
  }
}
