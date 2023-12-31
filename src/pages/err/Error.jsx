import React from "react";
import { Link, useRouteError } from "react-router-dom";
import WebTitle from "../../webTitle/WebTitle";

const Error = () => {
  const error = useRouteError();
  WebTitle()
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <p className="text-white text-3xl">
          <i>{error.statusText || error.message}</i>
        </p>
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      
      <Link to="/" className="mt-5">
        <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
           Go Home
          </span>
        </a>
      </Link>
    </main>
  );
};

export default Error;
