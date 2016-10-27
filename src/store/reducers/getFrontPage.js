export default function ( state = {value: 'test'}, action ) {
  switch (action.type) {
    case 'GET_WAPO':
      return Object.assign({}, state, 'howdy');
    default:
      return state;
  }
}
