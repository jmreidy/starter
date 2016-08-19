import { combineEpics } from 'redux-observable';

import { pingEpic, pongEpic } from './pingPongEpic';

const appEpic = combineEpics(
  pingEpic,
  pongEpic
);

export default appEpic;
