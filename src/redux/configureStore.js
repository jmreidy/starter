import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './modules/root';

const epicMiddleware = createEpicMiddleware(rootEpic);

const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );

  return store;
};

export default configureStore;