import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const MyToysTableRow = ({ toys }) => {
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
  } = toys || {};

  const deleteHandler = () => {
    fetch(`http://localhost:4999/myToys/${_id}`,{
      method:"DELETE"
    })
      .then((res) => res.json)
      .then((data) =>
        swal({
          title: "Success!",
          text: "product deleted successfully!",
          icon: "success",
          dangerMode: false,
        })
      )
      .catch((err) => console.log(err));
  };
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
        <span className="badge badge-ghost badge-sm">{seller_email}</span>
      </td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td>{available_quantity}</td>
      <th>
        <Link to={`/details/${_id}`} className="btn btn-ghost btn-xs">
          details
        </Link>
      </th>
      <th>
        <FaTrash className="inline cursor-pointer" onClick={deleteHandler} />
        <Link to={`/editToy/${_id}`}>
          <BsPencilSquare className="inline ml-1 cursor-pointer" />
        </Link>
      </th>
    </tr>
  );
};

export default MyToysTableRow;
