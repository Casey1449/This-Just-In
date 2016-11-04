export default function ( state = {}, action ) {
  switch (action.type) {
    case 'GET_HEADLINES':
      let page = action.page.toString();
      let source = action.payload.source;
      let articles = action.payload.articles;
      return { ...state, [page]: { ...state[page], [source]: articles }};

    case 'CLEAR':
      return [];

    default:
      return state;
    }
}
