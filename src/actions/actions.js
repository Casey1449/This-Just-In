

export const getWapo = payload => {
  return {
    type: 'GET_WAPO',
    payload
  };
};


export const fetchWapo = () => {
  return fetch("https://newsapi.org/v1/articles?source=the-washington-post&sortBy=top&apiKey=f04919cef67a4043af58f3efde1d9340")
        .then(response => response.json())
        .then(json => { let stuff = json.articles;
                        console.log(stuff);
                        return stuff;
                      });
};
