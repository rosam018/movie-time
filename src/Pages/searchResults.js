import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/store";
import { Link } from "react-router-dom";
import PosterPlaceholder from "../assets/images/posterPlaceholder.png";
import Footer from "../components/footer";

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
    <>
      <div className="container-fluid  mb-4">
        <div className="row mt-3">
          <div className="col-1 text-right  pt-4">
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
            <h1 className="rowTitle"> {searchString}</h1>
          </div>
        </div>

        <div className="row">
          {!searchResult || searchResult.length === 0 ? (
            <div className="col-12 mb-4">
              <p className="rowTitle mt-4 text-center">
                Oh Snap ! We did not find any movie that matches your search
              </p>
            </div>
          ) : (
            <>
              <div className="container-fluid mt-4">
                {searchResult && searchResult.length > 0 && (
                  <div className="row mt-3">
                    {searchResult.map(sr => (
                      <div className="col-6 col-md-2 mb-3" key={sr.id}>
                        <Link to={"/movie/" + sr.id}>
                          <img
                            className="img-fluid"
                            src={
                              sr.poster_path
                                ? `https://image.tmdb.org/t/p/w780${sr.poster_path}`
                                : PosterPlaceholder
                            }
                            alt={sr.title}
                          />
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};
