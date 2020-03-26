import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/store";

export default props => {
  const {
    state: { movie },
    actions: { getMovieDetails }
  } = useContext(StoreContext);
  const {
    match: {
      params: { movieId }
    }
  } = props;

  const [init, setInit] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {   
    if (!init) {
      setInit(true);
      console.log(movieId)
      getMovieDetails(movieId).then(() => {
        setLoading(false);
      });
    }
  });

  return (
    <div className="container mb-4">
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
          <div className="col">{movie.title}</div>
        </>
      )}
    </div>
  );
};
