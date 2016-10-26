export default ( state = {}, action ) => {
  switch (action.type) {
    case 'GET_WAPO':
      return Object.assign({}, state, action.getWapo);
    default:
      return state;
  }
};
