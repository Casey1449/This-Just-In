
export default function ( state = [], action ) {
  switch (action.type) {
    case 'PICK':
      let main = state.main.map((item) => {
        if(item.id !== action.id) { return item; }
          item.picked = !item.picked;
          return item;
      return [...state, main];
        });

    default:
      return state;
  }
}
