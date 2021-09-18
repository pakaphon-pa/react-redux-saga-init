import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import { logger, monitorReducerEnhancer } from "./middleware/middleware";
import rootSages from "./saga";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, logger],
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: null,
  enhancers: [monitorReducerEnhancer],
});

sagaMiddleware.run(rootSages);

export default store;
