export default function ( state = { sources: ['the-washington-post', 'the-new-york-times'] }, action ) {
  switch (action.type) {
    case 'GET_WAPO':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
