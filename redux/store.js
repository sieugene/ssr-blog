import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";


export function initStore(preloadedState) {
  return createStore(
    reducers,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
}

export const reduxStore = initStore();
export const { dispatch } = reduxStore;
export const getReduxState = () => {
  return reduxStore.getState()
}