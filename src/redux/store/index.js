import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import reducers from "../reducers";

const makeStore = () => {
  //Create a store
  const store = createStore(reducers);
  
  return store;
};

export const storeWrapper = createWrapper(makeStore, { debug: false });
