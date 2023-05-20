import React, { useState } from "react";
import img from "../../../assets/spider-man.jpg";
import { Link } from "react-router-dom";

const Category = () => {
  const [tab, setTab] = useState("spiderMan");
  const [products, setProducts] = useState([]);

  const content = products?.filter((p) => {
    if (tab === p?.category) {
      return true;
    }
    return false;
  });

  return (
    <div className="text-white ">
      <h1 className="text-3xl text-center font-bold tracking-wide mb-10">
        Category
      </h1>
      <div className="tabs justify-center">
        <a
          className={`tab tab-lifted  ${
            tab === "spiderMan" ? "tab-active" : "text-white"
          }`}
          onClick={() => setTab("spiderMan")}
        >
          Spaider Man{" "}
        </a>
        <a
          className={`tab tab-lifted  ${
            tab === "ironMan" ? "tab-active" : "text-white"
          }`}
          onClick={() => setTab("ironMan")}
        >
          Iron Man
        </a>
        <a
          className={`tab tab-lifted  ${
            tab === "batMan" ? "tab-active" : "text-white"
          }`}
          onClick={() => setTab("batMan")}
        >
          Bat Man
        </a>
      </div>

      {/* {content?.map((p) => (
        <div key={p._id} className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))} */}

      <div className="card w-80 h-80 px-8 py-4 ml-10 bg-white/5 border-2 shadow-2xl">
        <figure className="">
          <img src={img} alt="Shoes" className="rounded-xl w-36" />
        </figure>
        <div className="mt-4 space-y-2 items-center text-center">
          <h2 className="card-title tracking-wide">Shoes!</h2>
          <div className="flex justify-between">
            <p className="text-yellow-500 text-lg font-semibold">$20</p>
            <p>Saller</p>
          </div>
          <div className="card-actions justify-between items-center">
            <p>5 ratings</p>
            <Link to="/details/1" className="px-4 py-2 rounded-sm text-white hover:bg-[#ff4b0f] bg-[#ff630f] outline-none">Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
