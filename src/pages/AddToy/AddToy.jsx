import React from "react";

const AddToy = () => {
  return (
    <div className="w-5/6 bg-white/5 rounded-tr-[200px] rounded-tl-3xl rounded-br-2xl rounded-bl-[200px] m-auto h-[90vh]  my-10 outline text-white ">
      <div className="relative">
        <div className="w-80 h-80 bg-[#A427DF] absolute rounded-full blur-2xl opacity-20 "></div>
        <div className="relative z-10">
          <h1 className="text-7xl text-center py-4">Add New Toy </h1>
          
          <form className="w-full max-w-5xl mx-auto mt-10">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="toy-label"
                  htmlFor="name"
                >
                  Toy Name
                </label>
                <input
                  className="toy-input"
                  id="name"
                  type="text"
                  placeholder="Enter toy name"
                  name="name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="toy-label"
                  htmlFor="seller"
                >
                  seller
                </label>
                <input
                  className="toy-input"
                  id="seller"
                  type="text"
                  placeholder="Enter seller name"
                  name="seller"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="toy-label"
                  htmlFor="seller-email"
                >
                  seller-email
                </label>
                <input
                  className="toy-input"
                  id="seller-email"
                  type="text"
                  placeholder="Enter seller email "
                  name="seller-email"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="toy-label"
                  htmlFor="sub-category"
                >
                  sub-category
                </label>
                <input
                  className="toy-input"
                  id="sub-category"
                  type="text"
                  placeholder="Enter sub-category "
                  name="sub-category"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="toy-label"
                  htmlFor="price"
                >
                  price
                </label>
                <input
                  className="toy-input"
                  id="price"
                  type="number"
                  placeholder="Enter toy price"
                  name="price"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="toy-label"
                  htmlFor="ratings"
                >
                  ratings
                </label>
                <input
                  className="toy-input"
                  id="ratings"
                  type="number"
                  placeholder="Enter ratings "
                  name="ratings"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="toy-label"
                  htmlFor="photo"
                >
                  photo
                </label>
                <input
                  className="toy-input"
                  id="photo"
                  type="url"
                  placeholder="Enter toy photo"
                  name="photo"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="toy-label"
                  htmlFor="quantity"
                >
                  quantity
                </label>
                <input
                  className="toy-input"
                  id="quantity"
                  type="number"
                  placeholder="Enter quantity "
                  name="quantity"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
              <textarea className="textarea w-full bg-white/25 min-h-[100px]" placeholder="dercriptino"  />
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
