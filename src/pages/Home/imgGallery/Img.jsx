import React from "react";

const Img = ({img}) => {
  return (
    <div>
      <img
        className="h-52 w-80 rounded-lg"
        src={img.img}
        alt=""
      />
    </div>
  );
};

export default Img;
