import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieList, MovieDetails, Search, PageNotFound } from "../Pages";
import { Login } from "../Components/Login";
import { Register } from "../Components/Register";
import { ScrooltoTop } from "../Components/ScrooltoTop";
import { ProductedRoutes } from "./ProductedRoutes";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <ScrooltoTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ProductedRoutes />}>
          <Route
            path="home"
            element={
              <MovieList title="MoviesHUB" apiPath="movie/now_playing" />
            }
            exact
          />
          <Route
            path="movies/top"
            element={
              <MovieList title="Top Rated Movies" apiPath="movie/top_rated" />
            }
            exact
          />
          <Route
            path="movies/popular"
            element={
              <MovieList title="Popular Movies" apiPath="movie/popular" />
            }
            exact
          />
          <Route
            path="movies/upcoming"
            element={
              <MovieList title="Upcoming Movies" apiPath="movie/upcoming" />
            }
            exact
          />
          <Route path="movie/:id" element={<MovieDetails />} exact />
          <Route
            path="search"
            element={<Search apiPath="search/movie" />}
            exact
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// rr it solutions
