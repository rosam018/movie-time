import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/store";
import { Link, useHistory } from "react-router-dom";
import { usePrevious } from "../commons/customHooks";

import BackdropPlaceholder from "../assets/images/backdropPlaceholder.png";
import PosterPlaceholder from "../assets/images/posterPlaceholder.png";

export default props => {
  const [loading, setLoading] = useState(true);
  let history = useHistory();

  const {
    state: { movie },
    actions: { getMovieDetails }
  } = useContext(StoreContext);

  const {
    state: { relatedMovies },
    actions: { getRelatedMovies }
  } = useContext(StoreContext);
  const {
    match: {
      params: { movieId }
    }
  } = props;

  const prevMovie = usePrevious(movie);

  useEffect(() => {
    if (!prevMovie || movie !== prevMovie) {
      getMovieDetails(movieId).then(() => {
        getRelatedMovies(movieId);
        setLoading(false);
      });
    }
  });

  return (
    <div className="container-fluid mb-4">
      {loading && !movie ? (
        <div className="d-flex justify-content-center ">
          <div
            className="spinner-border spinner-border-lg text-primary my-5"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="row mt-3">
            <div className="col-1 text-right pt-2">
              <Link className="btn btn-link btn-sm" to={"/home"}>
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                  <path
                    d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z"
                    fill="#ef4370"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="col-11 mb-2">
              <h1 className="rowTitle"> {movie.title}</h1>
            </div>
          </div>
          <div className="container p-4 shadow shadow-lg rounded">
            <div className="row mt-3">
              <div className="col-12 col-lg-5">
                <p>Release Date: {movie.release_date}</p>
                <p>Runtime: {movie.runtime} minutes</p>
                <p>
                  Genres:{" "}
                  {movie.genres && movie.genres.map(mg => mg.name + ", ")}
                </p>

                <p className="lead"> {movie.overview}</p>
              </div>

              <div className="col-12 col-lg-7">
                <img
                  className="img-fluid"
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
                      : BackdropPlaceholder
                  }
                  alt={movie.title}
                />
              </div>
            </div>
          </div>

          {relatedMovies && relatedMovies.length > 0 && (
            <div className="container-fluid mt-4">
              <div className="row mt-3">
                <div className="col-12">
                  <h2 className="rowTitle">Related Movies</h2>
                </div>
              </div>
              <div className="row mt-3">
                {relatedMovies.map(rm => (
                  <div className="col-6 col-md-2 mb-3" key={rm.id}>
                    <button
                      className="btn btn-link"
                      onClick={() => history.push("/movie/" + rm.id)}
                    >
                      <img
                        className="img-fluid"
                        src={
                          rm.poster_path
                            ? `https://image.tmdb.org/t/p/w780${rm.poster_path}`
                            : PosterPlaceholder
                        }
                        alt={rm.title}
                      />
                    </button>

                    {/* <Link to={"/movie/" + rm.id}>
                      <img
                        className="img-fluid"
                        src={
                          rm.poster_path
                            ? `https://image.tmdb.org/t/p/w780${rm.poster_path}`
                            : PosterPlaceholder
                        }
                        alt={rm.title}
                      />
                    </Link> */}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
