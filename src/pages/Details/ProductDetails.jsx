import React from "react";
import { useParams } from "react-router-dom";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import img from "../../assets/spider-man.jpg";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className="text-white">
      <h1 className="text-4xl font-semibold text-center my-4 tracking-wide">
        Product Details
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  bg-white/10 shadow-xl md:max-w-5xl mx-auto rounded">
        <figure>
          <img src={img} alt="Album" className="w-[500px]" />
        </figure>
        <div className=" w-4/5 mx-auto py-5  space-y-3">
          <h2 className="text-3xl font-semibold ">New album is released!</h2>
          <p className="text-lg text-yellow-500 font-semibold">
            $100.00 - <span className="line-through ">$50</span>
          </p>
          <p>ratings</p>
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
            <button className=" px-4 py-2 rounded-sm text-white hover:bg-[#ff4b0f] bg-[#ff630f] outline-none">Add to Cart</button>
          </div>
          <h1 className="text-xl">product details</h1>
          <ul className="list-disc grid grid-cols-1 md:grid-cols-2">
            <li>saller</li>
            <li>quntity</li>
            <li>category</li>
          </ul>
          <h1 className="text-xl">product description</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ad
            inventore corporis at maxime ipsam similique aliquam, tempora omnis
            hic in dolorem numquam rem modi architecto 
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
