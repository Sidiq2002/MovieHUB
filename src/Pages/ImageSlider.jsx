import React from "react";
import { CustomSlider } from "../Components/CustomSlider";
import"../Pages/imageslider.css"
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import img4 from "../assets/img-4.jpg";

export const ImageSlider = () => {
  
  return (
    <div className="image">
      <CustomSlider>
       <img src={img1} alt="img-1" />
       <img src={img2} alt="img-2" />
       <img src={img3} alt="img-3" />
       <img src={img4} alt="img-4" />
      </CustomSlider>
    </div>
  );
};
