import allSources from '../../sources';

export default function ( state = allSources, action ) {
  switch (action.type) {
    case 'PICK':
    let page = action.pick.page.toString();
    let selected = state[page].map((item) => {
      if(item.id !== action.pick.id) { return item; }
        item.picked = !item.picked;
    return [...state, selected]; });
    return state;

    case 'MATCH_PICK':
      let page2 = action.pick.page.toString();
      let preselected = state[page2].map((item) => {
        if(item.id !== action.pick.id) { return item; }
          item.picked = true;
      return [...state, preselected]; });
      return state;

    default:
      return state;
  }
}
