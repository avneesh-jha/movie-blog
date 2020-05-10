//actions are just js object
//with two properties type and payload

//we wrap action in a function to make it abstract
//hence it is called action creator

export function addMovie(payload) {
  return {
    type: "ADD_MOVIE",
    payload,
  };
}

//above action creator was for plain js objects
//to use async actions, use redux-thunk
//now we can call API or use promises
export function getData() {
  return function (dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}
