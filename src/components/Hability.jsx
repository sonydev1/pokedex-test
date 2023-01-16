import React from 'react'

function Hability({ name, point }) {
   
    return (
      <>
        <div className="flex w-1/2 justify-between">
          <div>
            {name.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div>
            {point.map((item) => (
              <p key={item.id}>{item}</p>
            ))}
          </div>
        </div>
      </>
    );
}

export {Hability}