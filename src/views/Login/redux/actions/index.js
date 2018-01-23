export const LOGIN_SUCCESS = '@@CRUD/LOGIN_SUCCESS';
export const LOGIN_FAILURE = '@@CRUD/LOGIN_FAILURE';

export function loginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    token,
  };
}

export function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    message,
  };
}
