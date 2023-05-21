import React from "react";
import useFetch from "../../hooks/useFetch";
import TableRow from "../shareComponent/TableRow";

const AllToys = () => {
  const { data, error } = useFetch("http://localhost:4999/allToys");
  
  return (
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
          {data?.map((product) => (
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
  );
};

export default AllToys;
