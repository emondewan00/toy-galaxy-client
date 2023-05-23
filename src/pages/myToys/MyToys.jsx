import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysTableRow from "../shareComponent/MyToysTableRow";
import WebTitle from "../../webTitle/WebTitle";

const MyToys = () => {
  const [products, setProducts] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const email = currentUser?.email;

  useEffect(() => {
    fetch(`https://baby-toy-server-miremon5222-gmailcom.vercel.app/myToys?seller_email=${email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [email]);

  let content = null;
  if (products.length > 0) {
    content = products?.map((p) => <MyToysTableRow key={p._id} toys={p} />);
  }else{
    content=<h1 className="text-4xl font-bold my-10 text-white text-center">Products not found</h1>
  }
  WebTitle()
  return (
    <div className="overflow-x-auto w-full p-4">
      <table className="table w-full my-10">
        {/* head */}
        <thead>
          <tr>
            <th>Toy Name</th>
            <th>Seller</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available </th>
            <th>Details </th>
            <th>delete & updte</th>
          </tr>
        </thead>
        <tbody>
          {content}
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
            <th>delete & updte</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MyToys;
