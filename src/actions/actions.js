

export const getWapo = () => {
  return {
    type: 'GET_WAPO',
    data: 'fakedata'
  };
};


// export const fetchWapo = () =>  dispatch => {
//   return {data: 'fake data here'};
// };


// return fetch('https://newsapi.org/v1/articles?source=the-washington-post&sortBy=top&apiKey=f04919cef67a4043af58f3efde1d9340')
// .then(response => response.json())
// .then(json => dispatch(getWapo(json)));
