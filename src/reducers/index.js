import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from '../redux/modules/root';

const epicMiddleware = createEpicMiddleware(rootEpic);

const configureStore = () => {
  console.log('configuring store!');
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );

  return store;
};

export default configureStore;
