import { takeLatest, put } from "redux-saga/effects";
import { PRE_LOAD_DATA, LOAD_DATA } from "../actions/type";

function* fetchPreload() {
  yield put({ type: LOAD_DATA, data: { s: "1234" } });
}

function* starter() {
  yield takeLatest(PRE_LOAD_DATA, fetchPreload);
}

export default starter;
