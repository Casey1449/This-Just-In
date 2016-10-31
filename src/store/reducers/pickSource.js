import { initialState } from '../initial-state.js';
const sources = require('../../sources.js');
// export default function ( state = initialState.allSources, action ) {
//   switch (action.type) {
//     case 'PICK':
//       return state.map(item => {
//         if(item.id !== action.id) { return item; }
//           return Object.assign(item, {picked: !item.picked});
//         });
//   }
// }

export default function ( state = {}, action ) {
  switch (action.type) {
    case 'PICK':
    console.log(action.id);
      return sources.map((item) => {
        console.log(item.id);
        if(item.id === action.id) {
        return Object.assign({}, state, item );}
        });

    default:
      return state;
  }
}

// case 'STAR_GROCERY':
//   return state.map(item => {
//     if (item.id !== action.id) { return item; }
//     return Object.assign(item, { starred: !item.starred });
//   });


//make Component
//make container
//map state and dispatch to props
//render container
//make action
//make reducer for action
//require new reducer in rootReducer
