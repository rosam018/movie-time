const initialState = {
  latestMovies: [],
  genres: [],
  moviesByGenre: [],
  genre: undefined,
  movie: undefined,
  searchResult: undefined,
  relatedMovies: []
};

// this holds the possible types of actions
const types = {
  SET_LATESTMOVIES:"SET_LATESTMOVIES",
  SET_MOVIE: "SET_MOVIE",
  SET_RELATEDMOVIES: "SET_RELATEDMOVIES",
  SET_GENRES: "SET_GENRES",
  SET_MOVIESBYGENRE: "SET_MOVIESBYGENRE",
  SET_GENRE: "SET_GENRE",
  SET_SEARCHMOVIES: "SET_SEARCHMOVIES",
  CLEAR_MOVIE: "CLEAR_MOVIE",
  CLEAR_MOVIESBYGENRE: "CLEAR_MOVIESBYGENRE"
};

const reducer = (state = initialState, action) => {
  process.env.NODE_ENV === "development" && console.info(action.type);
  switch (action.type) {

    case types.SET_LATESTMOVIES: {
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

    case types.SET_GENRES: {
      return {
        ...state,
        genres: action.genres || []
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

    case types.SET_SEARCHMOVIES: {
      return {
        ...state,
        searchResult: action.searchResult || []
      };
    }

    case types.SET_RELATEDMOVIES: {
      return {
        ...state,
        relatedMovies: action.relatedMovies || []
      };
    }

    default: {
      return state;
    }
  }
};

export { initialState, types, reducer };
