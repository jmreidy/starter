import { PING, PONG } from '../contants';

export const pingEpic = action$ =>
  action$.filter(action => action.type === PING)
    .delay(1000)
    .mapTo({ type: PONG });

export const pongEpic = action$ =>
  action$.filter(action => action.type === PONG)
    .delay(1000)
    .mapTo({ type: PING });
