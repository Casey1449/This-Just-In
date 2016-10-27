export default function ( state = {value: 'test'}, action ) {
  switch (action.type) {
    case 'GET_WAPO':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
