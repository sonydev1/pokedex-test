import React from "react";
import { Hability } from "./Hability";

function PokeCard({ id, name, img, habi }) {
  /*    const skillName =  habi.map((item)= item.name)
   */
  /*  if (habi === undefined) {
        console.log('erro');
    } else {
        
 habi.map((element) = 
      
      );              
    }
     */

  if (
    id !== undefined &&
    name !== undefined &&
    img !== undefined &&
    habi !== undefined
  ) {
    //console.log(habi.map((item) => [item.name, item.points])); 
    return (
      <div>
        <section className="relative w-64 h-80 bg-slate-300 rounded-2xl drop-shadow-2xl">
          <div className="bg-red-500 h-7 w-28 rounded-tr-2xl  flex justify-center  absolute right-0">
            <p className="text-2xl text-white font-bold gap-2"># {id}</p>
          </div>
          <div className=" px-1 pt-12">
            <img src={img} alt={name} className=" drop-shadow-lg" />
          </div>
          <div className="flex justify-center ">
            <p className="text-xl text-white font-bold">{name}</p>
          </div>
        </section>
        <section>
          <div>
            {habi.map((item) => (
              <Hability key={item.name} name={item.name} point={item.points} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export { PokeCard };
