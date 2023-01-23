import React from "react";
import { Hability } from "./Hability";

function PokeCard({ id, name, img, habi }) {
  if (
    id !== undefined &&
    name !== undefined &&
    img !== undefined &&
    habi !== undefined
  ) {
    let newName = name.replaceAll("-", " ");
    
   
    return (
      <>
        <section className="relative w-64 h-80 bg-white text-center rounded-2xl drop-shadow-2xl bg-opacity-20">
            <p className="text-xl text-white font-bold">{newName}</p>  
          <div className="bg-red-500 h-7 w-28 rounded-tr-2xl  flex justify-center  absolute right-0">
            <p className="text-2xl text-white font-bold gap-2"># {id}</p>
          </div>
          <div className=" px-1 pt-12">
            <img src={img} alt={name} className=" drop-shadow-lg" />
          </div>
          <div className="flex justify-center ">
          </div>
        </section>
        <section className="">
          {habi.map((item, index) => (
            <Hability key={index}  point={item.points} />
          ))}
        </section>
      </>
    );
  }
}

export { PokeCard };
