import sources from '../sources';

export const pickSource = (id, page) => {

  return {
    type: 'PICK_MAIN',
    pick: {id, page}
  };
};

export const clearFrontSources = () => {
  return {
    type: 'CLEAR_SOURCES',
  };
};

export const clearFrontArticles = () => {
  return {
    type: 'CLEAR_FRONT'
  };
};

export const setFrontSources = () => {
  return {
    type: 'SET_FRONT_SOURCES',
    sources: sources.main.filter(arr => arr.picked)
  };
};

export const getHeadlines = (json) => {
  return {
    type: 'GET_HEADLINES',
    payload: json
  };
};

export const fetchFrontPageArticles = (source, key='f04919cef67a4043af58f3efde1d9340') =>
  (dispatch) => {
    return fetch(`https://newsapi.org/v1/articles?source=${source}&apiKey=${key}`)
          .then(response => response.json())
          .then(json => dispatch(getHeadlines(json)));
};
