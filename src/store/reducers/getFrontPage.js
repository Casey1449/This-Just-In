import { initialState } from '../initial-state.js';

export default function ( state = {}, action ) {
  switch (action.type) {
    case 'GET_HEADLINES':
        console.log(action.payload.articles);
        return Object.assign({}, state, action.payload.articles);
      default:
        return state;
    }
}


// return Object.assign({}, state, {articles: [action.payload.articles]});

// action.payload.articles.forEach(item => state.articles.push(item));
