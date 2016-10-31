const sources = require('../../sources.js');

export default function ( state = [], action ) {
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
