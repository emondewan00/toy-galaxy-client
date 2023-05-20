import React from "react";

const Img = ({i}) => {
  return (
    <div>
      <img
        className="h-auto w-80 rounded-lg"
        src={i.img}
        alt=""
      />
    </div>
  );
};

export default Img;
