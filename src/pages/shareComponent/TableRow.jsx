import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({ product }) => {
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
  } = product || {};
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar " />
            </div>
          </div>
          <div>
            <div className="font-bold">{toy_name}</div>
          </div>
        </div>
      </td>
      <td>
        {seller_name}
        <br />
        <span className="badge badge-ghost badge-sm">
          {seller_email}
        </span>
      </td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td>{available_quantity}</td>
      <th>
        <Link to={`/details/${_id}`} state={toy_name} className="btn btn-ghost btn-xs">details</Link>
      </th>
    </tr>
  );
};

export default TableRow;
