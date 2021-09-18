import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import { logger, monitorReducerEnhancer } from "./middleware/middleware";
import rootSages from "./saga";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export default function configStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer(history),
    middleware: [routerMiddleware(history), sagaMiddleware, logger],
    devTools: process.env.NODE_ENV !== "production",
    preloadedState,
    enhancers: [monitorReducerEnhancer],
  });

  sagaMiddleware.run(rootSages);

  return store;
}
