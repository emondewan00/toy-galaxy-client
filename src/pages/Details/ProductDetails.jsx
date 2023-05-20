import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  return <div className="text-white">product {id}</div>;
};

export default ProductDetails;
