import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieList, MovieDetails, Search, PageNotFound } from "../Pages";
import { Login } from "../Components/Login";
import { Register } from "../Components/Register";
import { ScrooltoTop } from "../Components/ScrooltoTop";
import { ProtectedRoutes } from "./ProductedRoutes";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <ScrooltoTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ProtectedRoutes />}>
          <Route
            path="home"
            element={
              <MovieList title="MoviesHUB" apiPath="movie/now_playing" />
            }
          />
          <Route
            path="movies/top"
            element={
              <MovieList title="Top Rated Movies" apiPath="movie/top_rated" />
            }
          />
          <Route
            path="movies/popular"
            element={
              <MovieList title="Popular Movies" apiPath="movie/popular" />
            }
          />
          <Route
            path="movies/upcoming"
            element={
              <MovieList title="Upcoming Movies" apiPath="movie/upcoming" />
            }
          />
          <Route path="movie/:id" element={<MovieDetails />} />
          <Route path="search" element={<Search apiPath="search/movie" />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
