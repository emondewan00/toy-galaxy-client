import React from "react";
import Img from "./Img";

const ImgGallery = () => {
  const img = [
    { id: 1, img: "/gallary1.jpg" },
    { id: 2, img: "/gallary2.jpg" },
    { id: 3, img: "/gallary3.jpg" },
    { id: 4, img: "/gallary4.jpg" },
    { id: 5, img: "/gallary5.jpg" },
    { id: 6, img: "/gallary6.jpg" },
    { id: 7, img: "/gallary7.jpg" },
    { id: 8, img: "/gallary8.jpg" },
    { id: 9, img: "/gallary9.jpg" },
    { id: 10, img: "/gallary10.jpg" },
    { id: 11, img: "/gallary11.jpg" },
    { id: 12, img: "/gallary12.jpg" },
  ];
  return (
    <div className="my-10">
      <h1 className="text-3xl text-center my-10 text-white">Image Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
        
      </div>
    </div>
  );
};

export default ImgGallery;
