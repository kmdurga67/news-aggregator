import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      <span className="ml-2 text-gray-900">Loading...</span>
    </div>
  );
};

export default Loader;
