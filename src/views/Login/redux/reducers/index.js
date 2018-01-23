import { Map } from 'immutable';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

const initialState = Map({
  isAuthenticated: false,
  token: '',
  error: '',
});

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.merge(Map({
        isAuthenticated: true,
        token: action.token,
      }));
    case LOGIN_FAILURE:
      return state.merge(Map({
        isAuthenticated: false,
        token: '',
        error: action.message,
      }));
    default:
      return state;
  }
}
