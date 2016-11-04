import sources from '../sources';

export const pickSource = (id, page) => {
  return {
    type: 'PICK',
    pick: {id, page}
  };
};

export const clearArticles = () => {
  return {
    type: 'CLEAR'
  };
};

export const getHeadlines = (json, page) => {
  return {
    type: 'GET_HEADLINES',
    page: page,
    payload: json
  };
};

export const fetchArticles = (source, page, key='f04919cef67a4043af58f3efde1d9340') =>
  (dispatch) => {
    return fetch(`https://newsapi.org/v1/articles?source=${source}&apiKey=${key}`)
          .then(response => response.json())
          .then(json => dispatch(getHeadlines(json, page)));
};
