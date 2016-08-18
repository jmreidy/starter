import Rx from 'rxjs';
const { ajax } = Rx.Observable;

const FETCH_USER = 'FETCH_USER';
const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';

// action creators
const fetchUser = username => ({ type: FETCH_USER, payload: username });
const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });

// epic
const fetchUserEpic = action$ =>
  action$.ofType(FETCH_USER)
    .mergeMap(action =>
      ajax.getJSON(`https://api.github.com/users/${action.payload}`)
        .map(fetchUserFulfilled)
    );


const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_USER_FULFILLED:
            const newState = state;
            newState[action.payload.login] = action.payload;
            return newState;

        default:
            return state;
    }
};

export default usersReducer;