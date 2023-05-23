import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BsFillBookmarkHeartFill, BsFillCartPlusFill } from "react-icons/bs";
import img from "../../assets/spider-man.jpg";
import WebTitle from "../../webTitle/WebTitle";

const ProductDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const {
    _id,
    toy_name,
    image,
    seller_name,
    seller_email,
    sub_category,
    price,
    rating,
    available_quantity,
    detail_description,
  } = data || {};
  const arr = new Array(Math.floor(+rating)).fill(0);
  WebTitle()
  return (
    <div className="text-white">
      <h1 className="text-4xl font-semibold text-center my-4 tracking-wide">
        Product Details
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  bg-white/10 shadow-xl md:max-w-5xl mx-auto rounded">
        <figure>
          <img
            src={image}
            alt="Album"
            className="w-[500px] h-[500px] object-fill object-center"
          />
        </figure>
        <div className=" w-4/5 mx-auto py-5  space-y-3">
          <h2 className="text-3xl font-semibold ">{toy_name}</h2>
          <p className="text-lg text-[#ff630f] font-semibold">
            ${price} - <span className="line-through ">$50</span>
          </p>
          <div className="rating block">
            {arr?.map((r, idx) => (
              <input
                key={idx}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            ))}
          </div>
          <input
            type="number"
            name=""
            id=""
            defaultValue="1"
            className=" w-20  outline-none bg-white/5 border-2  rounded-sm pl-2 "
          />
          <div className="card-actions items-center gap-x-5">
            <button className="">
              {" "}
              <BsFillBookmarkHeartFill className="inline" /> Add to wishlist
            </button>
            <button className="my-btn">
              {" "}
              <BsFillCartPlusFill className="inline" /> Add to Cart
            </button>
          </div>
          <h1 className="text-xl">product details</h1>
          <ul className="list-disc grid grid-cols-1 md:grid-cols-2 gap-y-2">
            <li>{seller_name}</li>
            <li>{seller_email}</li>
            <li>{available_quantity} Available</li>
            <li>{sub_category}</li>
          </ul>
          <h1 className="text-xl capitalize">product description</h1>
          <p>{detail_description.slice(0, 150)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
