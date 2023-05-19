import React from "react";
import img from "../../../assets/cover-img.jpg";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center h-[80vh] bg-[#01051e] text-white font-serif  items-center relative ">
        <div className="w-80 h-80 bg-red-400 absolute top-0 -left-5 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full">hallo</div>
        <div className="w-4/5 ">
          <h1 className="text-7xl ">
            It Help To Brain Growth For Your Childerns
          </h1>
          <form className="relative mt-4">
            <input
              type="search"
              placeholder="Search Toys"
              className="input text-white bg-white/5  w-full max-w-xs"
            />
            <input
              type="submit"
              value="Search "
              className="absolute left-52 text-white btn btn-success"
            />
          </form>
        </div>
        <div>
          <img src={img} className="w-[400px] " alt="" />
        </div>
      </div>
      <Category />
    </div>
  );
};

export default Home;
