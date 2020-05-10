const forbiddenWords = ["asshole", "dick"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      //do stuff here

      if (action.type === "ADD_MOVIE") {
        const foundWord = forbiddenWords.filter((word) =>
          action.payload.title.includes(word)
        );

        if (foundWord.length) {
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
      return next(action);
    };
  };
}
