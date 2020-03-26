import Home from "./Pages/home";
import Genre from "./Pages/genre";
import Movie from "./Pages/movie";
import SearchResults from "./Pages/searchResults"

export default [
  { path: "/genre", component: Genre },
  { path: "/movie/:movieId", component: Movie },
  { path: "/search/:searchString", component: SearchResults },
  { path: "/", component: Home }
];
