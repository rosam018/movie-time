import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/store";
import Slider from "./Slider";

export default () => {
  const {
    state: { latestMovies },
    actions: { getLatestMovies }
  } = useContext(StoreContext);

  const [init, setInit] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!init) {
      setInit(true);
      getLatestMovies().then(() => {
        setLoading(false);
      });
    }
  });

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
            {/* Latest Movies */}
            <div className="row mt-4">
              <div className="col d-flex">
                <h1 className="rowTitle">Latest Movies</h1>
              </div>
            </div>
            {latestMovies && latestMovies.length > 0 && (
              <Slider>
                {latestMovies.map(movie => (
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
