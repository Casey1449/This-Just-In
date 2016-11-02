export default function ( state = [], action ) {
  switch (action.type) {
    case 'GET_HEADLINES':
      return [ ...state, action.payload ];
    case 'CLEAR_FRONT':
      return [];
    default:
      return state;
    }
}
