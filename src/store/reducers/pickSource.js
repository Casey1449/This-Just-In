export default function ( state = [], action ) {
  switch (action.type) {
      case 'PICK':
      let page = action.pick.page.toString();
      let selected = state[page].map((item) => {
        if(item.id !== action.pick.id) { return item; }
          item.picked = !item.picked;
          return item;
      return [...state, selected]; });

    default:
      return state;
  }
}
