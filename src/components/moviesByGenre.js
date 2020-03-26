import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/store";
import Slider from "./Slider";
import { types } from "../context/reducers";

export default ({ genreId }) => {
  const { dispatch } = useContext(StoreContext);

  const {
    state: { moviesByGenre },
    actions: { getMoviesByGenre }
  } = useContext(StoreContext);

  const {
    state: { genre },
    actions: { getGenreById }
  } = useContext(StoreContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (genreId) {
      console.log(genreId, "======");

      dispatch({
        type: types.CLEAR_MOVIESBYGENRE
      });

      getMoviesByGenre(genreId.toString()).then(() => {
        getGenreById(genreId.toString());
        setLoading(false);
      });
    }
  }, [genreId]);

  return (
    <div className="row mb-3 px-2">
      <div className="col-12">
        {loading ? (
          <div className="d-flex justify-content-center">
            <div
              className="spinner-border spinner-border-lg text-primary my-5"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {/* Movies by Genre */}
            <div className="row mt-4">
              <div className="col d-flex">
                <h1 className="rowTitle">{genre && genre.name}</h1>
              </div>
            </div>

            {moviesByGenre && moviesByGenre.length > 0 && (
              <Slider>
                {moviesByGenre.map(movie => (
                  <Slider.Item movie={movie} key={movie.id}>
                    item1
                  </Slider.Item>
                ))}
              </Slider>
            )}
          </>
        )}
      </div>
    </div>
  );
};
