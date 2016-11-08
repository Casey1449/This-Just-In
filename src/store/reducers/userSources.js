export default function ( state = {}, action ) {
  switch (action.type) {
    case 'LOAD_USER_SOURCES':
      let userSources = action.pickedSources;
      return Object.assign({}, userSources);

    default:
      return state;
    }
}
