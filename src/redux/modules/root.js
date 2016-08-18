import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import ping, { pingEpic, pongEpic } from './ping';
import users, { fetchUserEpic } from './users';

export const rootEpic = combineEpics(
  pingEpic,
  pongEpic
);

export const rootReducer = combineReducers({
  base: (state={}, action) => ({count: 1}),
  ping,
  users
});