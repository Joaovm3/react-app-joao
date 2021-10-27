import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import reducers from "../reducers";

const makeStore = () => {
  //Create a store
  const store = createStore(reducers, applyMiddleware(thunk));
  
  return store;
};

export const storeWrapper = createWrapper(makeStore, { debug: false });
