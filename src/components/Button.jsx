import React from "react";

function Button({ handleClick, icon }) {
  return (
    <div className="relative   ">
      <div className=" bg-blue-900 w-[49px] left-[1px] h-12  rounded-full">
        <button
          className="bg-yellow-500 rounded-full active:translate-y-2 transition-all absolute -top-2"
          onClick={handleClick}
        >
          {icon}
        </button>
      </div>
    </div>
  );
}

export { Button };
