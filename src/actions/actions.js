

export const getWapo = (json) => {
  return {
    type: 'GET_WAPO',
    payload: json
  };
};


export const fetchSource = (source, key='f04919cef67a4043af58f3efde1d9340') =>  dispatch => {
  return fetch(`https://newsapi.org/v1/articles?source=${source}&apiKey=${key}`)
        .then(response => response.json())
        .then(json => dispatch(getWapo(json)));
};
