
//This will get the front-pagers on click during initial setup,
//or else they'll be hydrated from firebase.

export default function ( state = {}, action ) {
  switch (action.type) {
    case 'SET_SOURCES':
      let page = action.page.toString();
      return { ...state, [page]: action.sources };
    case 'CLEAR_FRONT':
      return [];
    default:
      return state;
    }
}
