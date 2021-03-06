export default function (state = {}, action) {
  switch(action.type) {
    case 'ATTEMPTING_LOGIN':
      return {
        status: 'AWAITING_AUTH_RESPONSE',
        username: 'guest',
        uid: null
      };

    case 'LOGIN':
      return {
        status: 'LOGGED_IN',
        username: action.username,
        uid: action.uid
      };
    default:
      return state;
  }
}
