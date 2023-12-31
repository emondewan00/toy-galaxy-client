import React, { useEffect, useState } from "react";
import TableRow from "../shareComponent/TableRow";
import WebTitle from "../../webTitle/WebTitle";

const AllToys = () => {
  const [url, setUrl] = useState("allToys");
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch(`https://baby-toy-server-miremon5222-gmailcom.vercel.app/${url}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [url]);

  const queryHandler = (event) => {
    event.preventDefault();
    setUrl(`allToys?toy_name=${searchText}`);
  };
  console.log(products)
  WebTitle()
  return (
    <div>
      <form onSubmit={queryHandler} className="">
        <div className="form-control mt-4  ">
          <div className="input-group justify-center">
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
      <div className="overflow-x-auto mx-2 md:mx-0 w-full">
        <table className=" table w-full my-10">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available </th>
              <th>Details </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product,idx) => (
              <TableRow key={product._id} product={product} idx={idx} />
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
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
