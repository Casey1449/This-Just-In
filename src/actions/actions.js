

export const getWapo = (json) => {
  return {
    type: 'GET_WAPO',
    payload: json
  };
};


export const fetchWapo = () =>  dispatch => {
  return fetch('https://newsapi.org/v1/articles?source=the-washington-post&sortBy=top&apiKey=f04919cef67a4043af58f3efde1d9340')
        .then(response => response.json())
        .then(json => dispatch(getWapo(json)));
};
