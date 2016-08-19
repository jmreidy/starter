import { combineReducers } from 'redux';

import pingPong from './pingPong';
import root from './root';

const appReducer = combineReducers({
  root,
  pingPong,
});

export default appReducer;
