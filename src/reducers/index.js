const initialState = {
  movies: [],
  remoteMovies: [],
};

//reducer is a pure function, means it gives
//exact same output for given input
//reducer produce state of an app
//they do it by sending signal to store(dispatching an action)

//use concat, slice, or the spread operator for arrays
//use Object.assign or object spread of objects

function rootReducer(state = initialState, action) {
  if (action.type === "ADD_MOVIE") {
    return Object.assign({}, state, {
      movies: state.movies.concat(action.payload),
    });
  }
  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteMovies: state.remoteMovies.concat(action.payload),
    });
  }
  return state;
}

export default rootReducer;
