import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Footer, Header } from "../Components";
import { useFetch } from "../hooks/useFetch";
import { ImageSlider } from "./ImageSlider";
export const MovieList = ({ title, apiPath }) => {
  const { data: movies } = useFetch(apiPath);
  useEffect(() => {
    document.title = title;
  });
  const navigation = useNavigate();
  return (
    <div>
      <Header />
      <div className="container-fluid detail">
        <main className="container">
          {title == "MoviesHUB" ? (
            <div>
              <ImageSlider />
              <div className="bg-secondary p-3 border my-3 rounded">
                <h5 className="text-dark">Welcome to MovieHUB</h5>
                <p>
                  Discover movies you&apos;ll love with personalized
                  suggestions, curated collections, and quick searches - you
                  guid to find great films.
                </p>
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    navigation("/movies/upcoming");
                  }}
                >
                  Explore Now
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          <h3 className="text-center py-1 text-info border-bottom">{title}</h3>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
            {movies.map((movie) => {
              return <Card key={movie.id} movie={movie} />;
            })}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
