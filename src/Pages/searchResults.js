import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/store";
import Slider from "../components/Slider";

export default props => {
  const [init, setInit] = useState(false);

  const {
    state: { searchResult },
    actions: { searchMovie }
  } = useContext(StoreContext);

  const {
    match: {
      params: { searchString }
    }
  } = props;

  useEffect(() => {
    if (!init) {
      setInit(true);
      searchMovie(searchString);
    }
  });

  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-12">{searchString}</div>
      </div>
      <div className="row">
        {!searchResult ? (
          <div className="col-12">
            <p className="rowTitle mt-4">
              Oh Snap ! We did not find any movie that matches your search
            </p>
          </div>
        ) : (
          <>
            {searchResult && searchResult.length > 0 && (
              <Slider>
                {searchResult.map(movie => (
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
