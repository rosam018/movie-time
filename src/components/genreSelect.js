import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/store";
import Select from "react-select";

const createHistory = require("history").createBrowserHistory;

export default props => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const {
    state: { movieGenres },
    actions: { getMovieGenres }
  } = useContext(StoreContext);

  const [init, setInit] = useState(false);

  useEffect(() => {
    if (!init) {
      setInit(true);
      getMovieGenres();
    }
  }, [getMovieGenres, init]);

  const options =
    movieGenres && movieGenres.map(mg => ({ value: mg.id, label: mg.name }));

  const handleChange = e => {
    setSelectedGenre(e.value);        
    //console.log(`Option selected:`, selectedGenre)
    let history = createHistory();
    history.push(`/genre/${selectedGenre}`);    
  };

  return (
    <div className="row my-2 px-2">
      <div className="col-12 col-xl-3">
        {movieGenres ? (
          <Select
            placeholder="Genre"
            options={options}
            value={selectedGenre}
            onChange={handleChange}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
