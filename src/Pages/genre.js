import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/store";
import MoviesByGenre from "../components/moviesByGenre";
import { types } from "../context/reducers";

export default () => {
    const [init, setInit] = useState(false);

  const [searchGenre, setSearchGenre] = useState("");

  const {
    state: { genres },
    actions: { getGenres }
  } = useContext(StoreContext);

  useEffect(() => {
    if (!init) {
      setInit(true);
      getGenres();
    }
  }, [getGenres, init]);

  const [showGenreSlider, setShowGenreSlider] = useState(false);

  const showGenreMovies = gId => {
    setSearchGenre(gId)
    setShowGenreSlider(true);
  };

  return (
    <>
      <div className="container mb-4">
        <div className="row mt-4 p-3 shadow shadow-md rounded">
          {genres && 
            genres.map(mg => {
              return (
                <div className="col-6 col-lg-2" key={mg.id}>
                  <button
                    className="btn btn-link"
                    onClick={() => showGenreMovies(mg.id)}
                  >
                    {mg.name}
                  </button>
                </div>
              );
            })}
        </div>
      </div>

      {showGenreSlider === true ? <MoviesByGenre genreId={searchGenre}/> : ""}
    </>
  );
};
