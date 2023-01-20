import React from "react";
import "./PokeCard.css";

function Hability({ name, point,color }) {
  return (
    <>
      <div className="w-80  mt-4  p-2 flex  transition-all gap-2 ">
        
          
        <div className="   text-center ">
          {name.map((item) => (
            <p className="h-6 mt-3 text-lg font-medium w-36" key={item}>
              {item}:
            </p>
          ))}
        </div>
        <div className="w-56 ">
          {point.map((item, index) => (
            <div key={index} className=" text-white  text-center   ">
              <div
                className={`${color} rounded-full h-6 mt-3 object-contain `}
                style={{ width: `${item}px` }}
              >
                {item}%
              </div>
            </div>
          ))}
        </div>
        </div>
      
    </>
  );
}

export { Hability };
