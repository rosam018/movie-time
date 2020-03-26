import { types } from "./reducers";
import { axiosAPI } from "../commons/axios";

export const useActions = (state, dispatch) => {
  const getLatestMovies = () => {
    return axiosAPI
      .get(`/3/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          primary_release_year: 2019,
          sort_by: "popularity.desc"
        }
      })
      .then(res => {
        //console.log(res.data.results);
        dispatch({
          type: types.SET_MOVIES,
          latestMovies: res.data.results
        });
      });
  };

  const getMovieDetails = movieId => {
       return axiosAPI    
      .get(`/3/movie/${movieId}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY
        }
      })
      .then(res => {
        dispatch({
          type: types.SET_MOVIE,
          movie: res.data
        });
      });
  };

  const getMovieGenres = () => {
    return axiosAPI
      .get(`/3/genre/movie/list`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY
        }
      })
      .then(res => {
        //console.log(res.data.genres);
        dispatch({
          type: types.SET_MOVIEGENRES,
          movieGenres: res.data.genres
        });
      });
  };

  const getGenreById = genreId => {   
    return axiosAPI
      .get(`/3/genre/movie/list`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY
        }
      })
      .then(res => {                
        let genre = res.data.genres.find(g => g.id.toString() === genreId);
        dispatch({
          type: types.SET_GENRE,
          genre: genre
        });
      });
  };

  const getMoviesByGenre = genreId => {
    return axiosAPI
      .get(`/3/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          with_genres: genreId
        }
      })
      .then(res => {
        dispatch({
          type: types.SET_MOVIESBYGENRE,
          moviesByGenre: res.data.results
        });
      });
  };

  const searchMovie = searchString => {
    return axiosAPI
      .get(`/3/search/movie`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          query: searchString
        }
      })
      .then(res => {
        dispatch({
          type: types.SET_SEARCHMOVIES,
          searchResult: res.data.results
        });
      });

      
  };

  return {
    getLatestMovies,
    getMovieDetails,
    getMovieGenres,
    getMoviesByGenre,
    getGenreById,
    searchMovie
  };
};
