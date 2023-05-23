import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import WebTitle from "../../webTitle/WebTitle";

const EditToy = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const product = useLoaderData();
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
  console.log(product)
  WebTitle()
  const onSubmit = (data) => {
    fetch(`http://localhost:4999/allToys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal({
            title:"Success!",
            text: "Coffee updated successfully!",
            icon: "success",
            dangerMode: false,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-5/6 bg-white/5 md:rounded-tr-[200px] md:rounded-tl-3xl md:rounded-br-2xl md:rounded-bl-[200px] m-auto md:h-[92vh] overflow-hidden my-10 p-3 md:py-10 outline text-white ">
      <div className="relative">
        <div className="w-80 h-80 bg-[#A427DF] absolute rounded-full blur-2xl opacity-20 "></div>
        <div className="w-80 h-80 bottom-0 right-0 bg-[#ff630f] absolute rounded-full blur-2xl opacity-40 "></div>
        <div className="relative z-10">
          <h1 className="text-5xl text-center py-4">Edit {toy_name} </h1>

          <form
            className="w-full max-w-5xl mx-auto mt-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="toy-label" htmlFor="name">
                  Toy Name
                </label>
                <input
                  className="toy-input"
                  id="name"
                  {...register("toy_Name")}
                  type="text"
                  placeholder="Enter toy name"
                  name="toy_Name"
                  defaultValue={toy_name}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="toy-label" htmlFor="seller">
                  seller
                </label>
                <input
                  className="toy-input"
                  id="seller"
                  type="text"
                  placeholder="Enter seller name"
                  name="seller_name"
                  {...register("seller_name")}
                  defaultValue={seller_name}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="toy-label" htmlFor="seller-email">
                  seller-email
                </label>
                <input
                  className="toy-input"
                  id="seller-email"
                  type="text"
                  placeholder="Enter seller email "
                  name="seller_email"
                  {...register("seller_email")}
                  defaultValue={seller_email}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="toy-label" htmlFor="sub-category">
                  sub-category
                </label>
                <input
                  className="toy-input"
                  id="sub-category"
                  type="text"
                  placeholder="Enter sub-category "
                  name="sub_category"
                  {...register("sub_category")}
                  defaultValue={sub_category}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="toy-label" htmlFor="price">
                  price
                </label>
                <input
                  className="toy-input"
                  id="price"
                  type="number"
                  placeholder="Enter toy price"
                  name="price"
                  {...register("price")}
                  defaultValue={price}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="toy-label" htmlFor="ratings">
                  ratings
                </label>
                <input
                  className="toy-input"
                  id="ratings"
                  type="number"
                  placeholder="Enter ratings "
                  name="rating"
                  {...register("rating")}
                  defaultValue={rating}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="toy-label" htmlFor="photo">
                  photo
                </label>
                <input
                  className="toy-input"
                  id="photo"
                  type="url"
                  placeholder="Enter toy photo"
                  name="image"
                  {...register("image")}
                  defaultValue={image}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="toy-label" htmlFor="quantity">
                  quantity
                </label>
                <input
                  className="toy-input"
                  id="quantity"
                  type="number"
                  placeholder="Enter quantity "
                  name="available_quantity"
                  {...register("available_quantity")}
                  defaultValue={available_quantity}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <textarea
                  className="textarea w-full bg-white/25 min-h-[100px]"
                  placeholder="detail_description"
                  defaultValue={detail_description}
                  {...register("detail_description")}
                />
                <button
                  type="submit"
                  className="bg-[#D2B48C] w-full py-4 rounded outline outline-black text-xl mt-2"
                >
                  Edit Toy
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditToy;
