import React, { useContext } from "react";
import TableRow from "../shareComponent/TableRow";
import useFetch from "../../hooks/useFetch";

const MyToys = () => {
  const { data, error } = useFetch("http://localhost:4999/allToys");
  return (
    <div className="overflow-x-auto w-full p-4">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((p) => (
            <TableRow key={p._id} />
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MyToys;
