import React from "react";
import img from "../../../assets/cover-img.jpg";
import Category from "../Category/Category";
import ImgGallery from "../imgGallery/ImgGallery";
import CustomerReview from "../Review/CustomerReview";
import WebTitle from "../../../webTitle/WebTitle";

const Home = () => {
  WebTitle()
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center h-[80vh]  text-white font-serif  items-center my-10  " data-aos="fade-up">
        <div className=" md:w-4/5 relative">
          <div className="w-80 h-80 bg-[#A427DF] absolute rounded-full blur-2xl opacity-20"></div>
          <div className="relative">
            <h1 className=" text-6xl px-4 md:px-0 ">
              It Help To Brain Growth For Your Childerns
            </h1>
            
          </div>
        </div>
        <div>
          <img
            src={img}
            className="w-[400px] px-4 md:px-0 mt-6 md:mt-0 rounded-tr-[150px] rounded-lg"
            alt=""
          />
        </div>
      </div>
      <Category />
      <ImgGallery />
      <CustomerReview />
    </div>
  );
};

export default Home;
