import React from 'react'

function Hability({ name, point }) {
   
    return (
      <>
        <div className="mt-8 flex p-4 justify-between border borde-9 border-red-400">
          <div >
            {name.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="bg-red-400 w-10 text-center">
            {point.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </>
    );
}

export {Hability}