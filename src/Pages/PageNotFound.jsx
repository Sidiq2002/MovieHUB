import Pagenot from "../assets/pagenotfound.png";
export const PageNotFound = () => {
  return (
    <div className="container page-container text-center pagenot_found">
      <div>
        <img src={Pagenot} className="pagenot_image" />
      </div>
      <div>
        <a href="home" className="btn btn-success mt-3">
          Goto Home Page
        </a>
      </div>
    </div>
  );
};
