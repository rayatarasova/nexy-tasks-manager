import { createStore, applyMiddleware, compose } from "redux";
import coreReducers from "./coreReducers";
import createSagaMiddleware from "redux-saga";
import coreSagas from "./coreSagas";

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState = {}) => {
  const store = createStore(
    coreReducers,
    storeEnhancers(
      applyMiddleware(initialiseSagaMiddleware)
    )
  );

  initialiseSagaMiddleware.run(coreSagas);

  return store;
}

export default configureStore;
