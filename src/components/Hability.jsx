import React from "react";

function Hability({  point }) {
  return (
    <>
      <div className="flex justify-between px-2">
        <h1 className="font-semibold ">HP</h1>
        {point[0]}%
      </div>
      <div className="w-80 bg-gray-200 rounded-full ">
        <div
          className="bg-blue-600 text-xs font-medium transition-all duration-1000 text-blue-100 text-center p-2 leading-none rounded-full"
          style={{ width:  `${point[0]}%`}}
        >
          
        </div>
      </div>
    </>
  );
}

export { Hability };
