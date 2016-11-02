
//This will get the front-pagers on click during initial setup,
//or else they'll be hydrated from firebase.

export default function ( state = [], action ) {
  switch (action.type) {
    case 'SET_FRONT_SOURCES':
      return action.sources;
    default:
      return state;
    }
}
