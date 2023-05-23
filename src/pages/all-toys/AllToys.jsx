import React, { useEffect, useState } from "react";
import TableRow from "../shareComponent/TableRow";

const AllToys = () => {
  const [url, setUrl] = useState("allToys");
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4999/${url}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [url]);

  const queryHandler = (event) => {
    event.preventDefault();
    setUrl(`getToyByQuery?toy_name=${searchText}`);
  };

  return (
    <div>
      <form onSubmit={queryHandler} className="">
        <div className="form-control mt-4 max-w-md mx-auto">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search by name "
              className="input input-bordered"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="btn btn-square" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
      <div className="overflow-x-auto w-full">
        <table className=" table w-full my-10">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available </th>
              <th>Details </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <TableRow key={product._id} product={product} />
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available </th>
              <th>Details </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
