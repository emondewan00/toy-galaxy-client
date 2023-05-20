import React from "react";
import { useParams } from "react-router-dom";
import img from "../../assets/spider-man.jpg";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className="text-white">
      <h1 className="text-4xl font-semibold text-center my-4 tracking-wide">
        Product Details
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Album" className="w-[500px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
