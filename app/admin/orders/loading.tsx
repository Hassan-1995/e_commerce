import React from "react";

const LoadingContent = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50"></div>
      <p className="ml-4 text-lg text-gray-700">Loading orders...</p>
    </div>
  );
};

export default LoadingContent;
