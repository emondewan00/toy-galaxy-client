import React from "react";
import { FaGoogle } from "react-icons/fa";

const GoogleLog = () => {
  return (
    <>
      <div className="divider after:bg-blue-600 before:bg-blue-600">OR</div>
      <p className="flex justify-center gap-x-3">
        <span className="bg-white/10 p-3 rounded-full cursor-pointer">
          <FaGoogle />
        </span>
      </p>
    </>
  );
};

export default GoogleLog;
