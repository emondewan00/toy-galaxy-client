import React, { useEffect, useState } from "react";
import img from "../../../assets/spider-man.jpg";
import { Link } from "react-router-dom";

const Category = () => {
  const [tab, setTab] = useState("Spider Man");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4999/getToyByQuery?sub_category=${tab}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [tab]);
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
  } = products || {};

  return (
    <div className="text-white my-10">
      <h1 className="text-6xl text-center my-8 text-white mb-10">
        Category
      </h1>
      <div className="tabs justify-center">
        <a
          className={`tab tab-lifted  ${
            tab === "Spider Man" ? "tab-active" : "text-white"
          }`}
          onClick={() => setTab("Spider Man")}
        >
          Spaider Man{" "}
        </a>
        <a
          className={`tab tab-lifted  ${
            tab === "Iron Man" ? "tab-active" : "text-white"
          }`}
          onClick={() => setTab("Iron Man")}
        >
          Iron Man
        </a>
        <a
          className={`tab tab-lifted  ${
            tab === "Bat Man" ? "tab-active" : "text-white"
          }`}
          onClick={() => setTab("Bat Man")}
        >
          Bat Man
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 my-10  gap-8 px-10">
        {products?.map((p) => {
          const name =
            p.toy_name.length > 25
              ? p.toy_name.slice(0, 24) + "..."
              : p.toy_name;
          return (
            <div
              key={p._id}
              className="card w-80 h-80 px-8 py-4 ml-10 bg-white/5 border-2 shadow-2xl"
            >
              <figure className="">
                <img src={p.image} alt="Shoes" className="rounded-xl w-36" />
              </figure>
              <div className="mt-4 space-y-2 items-center text-center">
                <h2 className="card-title tracking-wide">{name}</h2>
                <div className="flex justify-between">
                  <p className="text-yellow-500 text-lg font-semibold">
                    ${p.price}
                  </p>
                  <p>{p.seller_name}</p>
                </div>
                <div className="card-actions justify-between items-center">
                  <p>{p.rating} ratings</p>
                  <Link
                    to={`/details/${p._id}`}
                    className="px-4 py-2 rounded-sm text-white hover:bg-[#ff4b0f] bg-[#ff630f] outline-none"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="card w-80 h-80 px-8 py-4 ml-10 bg-white/5 border-2 shadow-2xl">
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
            <Link
              to="/details/1"
              className="px-4 py-2 rounded-sm text-white hover:bg-[#ff4b0f] bg-[#ff630f] outline-none"
            >
              Details
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Category;
