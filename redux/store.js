import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import logger from 'redux-logger'


export function initStore(preloadedState) {
  return createStore(
    reducers,
    preloadedState,
    composeWithDevTools(applyMiddleware(logger))
  );
}

export const reduxStore = initStore();
export const { dispatch } = reduxStore;
export const getReduxState = () => {
  return reduxStore.getState()
}