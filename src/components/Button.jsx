import React from "react";

function Button({ handleClick, icon }) {
  return (
    <div className="relative  ">
      <div className="absolute bg-blue-900 w-[49px] left-[1px] h-12 -z-10 top-2 rounded-full"></div>
      <button
        className="bg-yellow-500 rounded-full active:translate-y-2 transition-all"
        onClick={handleClick}
      >
        {icon}
      </button>
    </div>
  );
}

export { Button };
