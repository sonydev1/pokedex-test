
import React from "react";
import { Hability } from "./Hability";
import "../index.css";

function PokeCard({ id, name, img, habi,color,type}) {
  if (
    id !== undefined &&
    name !== undefined &&
    img !== undefined &&
    habi !== undefined
  ) {
    let newName = name.replaceAll("-", " ");
    

    return (
      <>
        <div className="flex flex-col items-center">
          <section className="relative w-64 h-80 bg-white text-center rounded-2xl drop-shadow-2xl bg-opacity-20">
            <p className="text-xl text-white font-bold">{newName}</p>
            <div className="bg-red-500 h-7 w-28 rounded-tr-2xl  flex justify-center  absolute right-0">
              <p className="text-2xl text-white font-bold gap-2"># {id}</p>
            </div>
            <div className=" px-1 pt-12">
              <img src={img} alt={name} className=" drop-shadow-lg" />
            </div>
          </section>
          <section className="ml-8 mt-4 w-[402px]  h-[350px]  p-2 bg-white rounded-t-2xl ">
            <div className="flex justify-center gap-5">
              <p className="">{type[0]}</p>
              <p>{type[1]}</p>
            </div>
            {habi.map((item, index) => (
              <Hability key={index} color={color} point={item.points} />
            ))}
          </section>
        </div>
      </>
    );
  }
}

export { PokeCard };
