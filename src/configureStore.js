import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import appEpic from './epics';
import appReducer from './reducers';

const epicMiddleware = createEpicMiddleware(appEpic);

const configureStore = () => {
  const middlewares = [
    epicMiddleware,
  ];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    appReducer,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
