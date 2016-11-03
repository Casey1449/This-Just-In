export default function ( state = {}, action ) {
  switch (action.type) {
    case 'GET_HEADLINES':
      let page = action.page.toString();
      return { ...state, [page]: action.payload};
    case 'CLEAR_FRONT':
      return [];
    default:
      return state;
    }
}
