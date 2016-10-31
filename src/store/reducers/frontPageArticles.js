export default function ( state = [], action ) {
  switch (action.type) {
    case 'GET_HEADLINES':
      return [ ...state, action.payload ];
    default:
      return state;
    }
}
