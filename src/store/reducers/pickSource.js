const sources = require('../../sources.js');

export default function ( state = [], action ) {
  switch (action.type) {
    case 'PICK':
      return state.map((item) => {
        if(item.id !== action.id) { return item; }
          item.picked = !item.picked;
          return item;
        });

    default:
      return state;
  }
}
