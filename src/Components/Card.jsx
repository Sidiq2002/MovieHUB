import { Link } from "react-router-dom";
import NoImage from "../assets/noimage.jpg";

export const Card = ({movie}) => {
  const {id,title,overview,vote_average,vote_count,poster_path} = movie
  const image = poster_path ? `http://image.tmdb.org/t/p/original${poster_path}`: NoImage;
  return (
    <div className="col">
      <div className="card shadow-sm" title={title}>
        <img src={image} alt="" className="img-fluid"/>
        <div className="card-body">
          <h5 className="card-title text-dark text-overflow-1">{title}</h5>
          <p className="card-text text-overflow-2">{overview}</p>
          <div className="d-flex justify-content-between align-items-center">
            <Link to={`/movie/${id}`} className=" btn btn-outline-dark">
              Read More
            </Link>
            <small>
              <i className="bi bi-star-fill text-warning me-1"></i>
                {vote_average} | {vote_count} reviews
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
