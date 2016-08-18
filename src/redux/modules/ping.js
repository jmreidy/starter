const PING = 'PING';
const PONG = 'PONG';

export const ping = () => ({ type: PING });

export const pingEpic = action$ =>
  action$.filter(action => action.type === 'PING')
    .delay(1000)
    .mapTo({ type: 'PONG' });

export const pongEpic = action$ =>
  action$.filter(action => action.type === 'PONG')
    .delay(1000)
    .mapTo({ type: 'PING' });

const pingReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case PING:
      return { isPinging: true };

    case PONG:
      return { isPinging: false };

    default:
      return state;
  }
};

export default pingReducer;
