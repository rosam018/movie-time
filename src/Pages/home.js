import React from "react";
import LatestMovies from "../components/latestMovies";
import MoviesByGenre from "../components/moviesByGenre";
import Footer from "../components/footer";

export default () => {
  return (
    <>
      <LatestMovies />

      {/* get animation movies */}
      <MoviesByGenre genreId="16" />

      <Footer />
    </>
  );
};
