import React from 'react'
import "./Statistics.css";

function Statistics({ color, point, value, name }) {
   
  return (
    <section className="w-full mb-1 ">
      <div className="flex justify-between ">
        <p className={`text-base font-medium  ${color}1`}>{name}</p>
        <p className={`text-sm font-medium  ${color}1`}>{point}%</p>
      </div>
      <div className="w-full bg-slate-300 rounded-full h-2.5">
        <div
          className={`${color} h-2.5 rounded-full transition-all `}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </section>
  );
}

export  {Statistics}