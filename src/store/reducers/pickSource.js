
export default function ( state = [], action ) {
  switch (action.type) {
    case 'PICK_MAIN':
      let page = action.pick.page.toString();
      let cat = state[page].map((item) => {
        if(item.id !== action.pick.id) { return item; }
          item.picked = !item.picked;
          return item;
      return [...state, cat];
        });

    default:
      return state;
  }
}
