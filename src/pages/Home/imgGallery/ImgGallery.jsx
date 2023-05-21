import React from "react";
import Img from "./Img";

const ImgGallery = () => {
  const img = [
    { id: 1, img: "/img-gallary/gallary1.jpg" },
    { id: 2, img: "/img-gallary/gallary2.jpg" },
    { id: 3, img: "/img-gallary/gallary3.jpg" },
    { id: 4, img: "/img-gallary/gallary4.jpg" },
    { id: 5, img: "/img-gallary/gallary5.jpg" },
    { id: 6, img: "/img-gallary/gallary6.jpg" },
    { id: 7, img: "/img-gallary/gallary7.jpg" },
    { id: 8, img: "/img-gallary/gallary8.jpg" },
    { id: 9, img: "/img-gallary/gallary9.jpg" },
    { id: 10, img: "/img-gallary/gallary10.jpg" },
    // { id: 11, img: "/img-gallary/gallary11.jpg" },
    // { id: 12, img: "/img-gallary/gallary12.jpg" },
  ];
  return (
    <div className="my-10">
      <h1 className="text-3xl text-center my-10 text-white">Image Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
        {img.map((i) => (
          <Img key={i.id} img={i} />
        ))}
      </div>
    </div>
  );
};

export default ImgGallery;
