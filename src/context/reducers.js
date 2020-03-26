const initialState = {
  latestMovies: [],
  movieGenres: [],
  moviesByGenre: [],
  genre: undefined,
  movie: undefined,
  searchResult: undefined
};

// this holds the possible types of actions
const types = {
  SET_MOVIE: "SET_MOVIE",
  SET_MOVIEGENRES: "SET_MOVIEGENRES",
  SET_MOVIESBYGENRE: "SET_MOVIESBYGENRE",
  SET_GENRE: "SET_GENRE",
  CLEAR_MOVIE: "CLEAR_MOVIE",
  CLEAR_MOVIESBYGENRE: "CLEAR_MOVIESBYGENRE",
  CLEAR_GENRE: "CLEAR_GENRE",
  SET_SEARCHMOVIES: "SET_SEARCHMOVIES"
};

const reducer = (state = initialState, action) => {
  process.env.NODE_ENV === "development" && console.info(action.type);
  switch (action.type) {
    case types.SET_MOVIES: {
      return {
        ...state,
        latestMovies: action.latestMovies || []
      };
    }

    case types.SET_MOVIE: {
      return {
        ...state,
        movie: action.movie
      };
    }

    case types.SET_MOVIEGENRES: {
      return {
        ...state,
        movieGenres: action.movieGenres || []
      };
    }

    case types.SET_MOVIESBYGENRE: {
      return {
        ...state,
        moviesByGenre: action.moviesByGenre || []
      };
    }

    case types.SET_GENRE: {
      return {
        ...state,
        genre: action.genre || []
      };
    }

    case types.CLEAR_MOVIE: {
      return {
        ...state,
        movie: undefined
      };
    }

    case types.CLEAR_MOVIESBYGENRE: {
      return {
        ...state,
        moviesByGenre: []
      };
    }

    case types.CLEAR_GENRE: {
      return {
        ...state,
        GENRE: undefined
      };
    }

    case types.SET_SEARCHMOVIES: {
      return {
        ...state,
        searchResult: action.searchResult || []
      };
    }
   
    default: {
      return state;
    }
  }
};

export { initialState, types, reducer };
