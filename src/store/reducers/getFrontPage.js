import { initialState } from "../initial-state.js";

export default function ( state = initialState.frontPageSources, action ) {
  switch (action.type) {
    case 'GET_WAPO':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
