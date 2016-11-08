export default function ( state = [], action ) {
  switch (action.type) {
    case 'PICK':
    let page = action.pick.page.toString();
    let selected = state[page].map((item) => {
      if(item.id !== action.pick.id) { return item; }
        item.picked = !item.picked;
        return item;
    return [...state, selected]; });
    return state;

    case 'MATCH_PICK':
      let page2 = action.pick.page.toString();
      let preselected = state[page2].map((item) => {
        if(item.id !== action.pick.id) { return item; }
          item.picked = true;
          return item;
      return [...state, preselected]; });
      return state;

    default:
      return state;
  }
}
