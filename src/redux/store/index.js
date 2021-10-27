import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";

import reducers from "../reducers";

export const makeStore = () => {

  const { persistStore, persistReducer } = require('redux-persist');
  const storage = require('redux-persist/lib/storage').default;

  const persistConfig = {
    key: "root",
    storage: storage,
  }

  const persistedReducer = persistReducer(persistConfig, reducers);

  //Create a store
  const store = createStore(persistedReducer, applyMiddleware(thunk));
  store.__persistor = persistStore(store); 
    
  return store;
};

export const storeWrapper = createWrapper(makeStore, { debug: false });
