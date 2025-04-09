import { useParams } from "react-router-dom";
import NoImage from "../assets/noimage.jpg";
import { useEffect, useState } from "react";
import { Footer, Header } from "../Components";

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const params = useParams();
  const Key = "9d473a3536fad72fda818a2e6de9719a";
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${Key}`;
  const Image = movie.poster_path
    ? `http://image.tmdb.org/t/p/original${movie.poster_path}`
    : NoImage;
  useEffect(() => {
    async function handleFetchMovies() {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => setMovie(jsonData));
    }
    handleFetchMovies();
  }, []);
  function handleConvertMinuts(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m `;
  }

  useEffect(() => {
    document.title = `${movie.title}`;
  }, [movie]);
  return (
    <div>
         <Header />
      <div className="container-fluid detail">
        <main className="container mt-2">
          <div className="row">
            <div className="col-md-4">
              <img src={Image} alt="" className="img-fluid img-thum" />
            </div>
            <div className="col-md-8">
              <h3 className="text-secondary">{movie.title}</h3>
              <p className="mt-3">{movie.overview}</p>
              {movie.genres ? (
                <p className="d-flex gap-3">
                  {movie.genres.map((genre) => {
                    <span key={genre.id} className="badge bg-danger">
                      {genre.name}
                    </span>;
                  })}
                </p>
              ) : (
                ""
              )}
              <p className="mt-2">
                <i className="bi bi-star-fill text-warning"></i>{" "}
                {movie.vote_average} |{" "}
                <i className="bi bi-person-fill text-success"></i>{" "}
                {movie.vote_count} reviews
              </p>
              <table className="table table-bordered w-50 mt-2 ">
                <tbody>
                  <tr>
                    <th>RunTime</th>
                    <td>{handleConvertMinuts(movie.runtime)}</td>
                  </tr>
                  <tr>
                    <th>Budget</th>
                    <td>{movie.budget}</td>
                  </tr>
                  <tr>
                    <th>Revenue</th>
                    <td>{movie.revenue}</td>
                  </tr>
                  <tr>
                    <th>Release Date</th>
                    <td>{movie.release_date}</td>
                  </tr>
                </tbody>
              </table>
              <a
                className="btn btn-warning"
                href={`https://www.imdb.com/title/${movie.imdb_id}/`}
                target="_blank"
              >
                View in IMDB
              </a>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
