import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddToy = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:4999/allToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) =>
        swal({
          title: "Success!",
          text: "product added successfully!",
          icon: "success",
          dangerMode: true,
        })
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-5/6 bg-white/5 md:rounded-tr-[200px] md:rounded-tl-3xl md:rounded-br-2xl md:rounded-bl-[200px] m-auto md:h-[92vh]  my-10 p-3 md:p-0 outline text-white ">
      <div className="relative">
        <div className="w-80 h-80 bg-[#A427DF] absolute rounded-full blur-2xl opacity-20 "></div>
        <div className="w-80 h-80 bottom-0 right-0 bg-[#ff630f] absolute rounded-full blur-2xl opacity-40 "></div>
        <div className="relative z-10">
          <h1 className="text-7xl text-center py-4">Add New Toy </h1>

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
                  {...register("toyName")}
                  type="text"
                  placeholder="Enter toy name"
                  name="toyName"
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
                  name="seller"
                  {...register("seller")}
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
                  name="seller-email"
                  {...register("seller-email")}
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
                  name="sub-category"
                  {...register("sub-category")}
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
                  name="ratings"
                  {...register("ratings")}
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
                  name="photo"
                  {...register("photo")}
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
                  name="quantity"
                  {...register("quantity")}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <textarea
                  className="textarea w-full bg-white/25 min-h-[100px]"
                  placeholder="dercriptino"
                />
                <button
                  type="submit"
                  className="bg-[#D2B48C] w-full py-4 rounded outline outline-black text-xl mt-2"
                >
                  Add Toy
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
