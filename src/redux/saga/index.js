import { fork } from "redux-saga/effects";
import starter from "./starter.saga";

export default function* sagas() {
  yield fork(starter);
}
