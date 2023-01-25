import React from "react";
import { Hability } from "./Hability";
import pokebal from "../assets/pokebal.png";
import "../index.css";
import { Pokeball } from "iconoir-react";
import { iconType, TypeColor } from "./../utils/utlis";

function PokeCard({ id, name, img, habi, color, type }) {
  if (
    id !== undefined &&
    name !== undefined &&
    img !== undefined &&
    habi !== undefined
  ) {
    let newName = name.replaceAll("-", " ");

    return (
      <>
        <div className="flex flex-col items-center ">
          <p className="text-2xl text-white font-bold capitalize">{newName}</p>
          <section className=" w-64 h-80  text-center ">
            <div className=" p-1   flex justify-center  space-x-4">
              <Pokeball color="white" className="mt-1.5 " />
              <p className="text-2xl text-white font-bold ">{id}</p>
            </div>
            <div className="relative px-1  mt-4 ">
              <img
                src={pokebal}
                alt={name}
                className="absolute top-0 w-96 animate-[spin_10s_linear_infinite]  "
              />
              <img src={img} alt={name} className="  drop-shadow-sm" />
            </div>
          </section>
          <section className=" mt-4 w-[350px]  h-full  bg-white rounded-2xl ">
            <h1 className={`text-xl text-center font-semibold ${color}1 `}>
              Types
            </h1>
            <div className="flex justify-center gap-5  my-3  transition-all">
              {type.name.map((item) => (
                
                  <div
                    key={item}
                    className={`w-14 rounded-full `}
                    style={{
                      boxShadow: `0 0 20px ${TypeColor(item.toString())}`,
                      background: `${TypeColor(item.toString())}`,
                    }}
                  >
                    <img
                      src={iconType(item.toString())}
                      alt=""
                      className="p-3 "
                    />
                  </div>
              
              ))}
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
