import React from "react";
import { useSelector } from "react-redux";

export default function OutputField() {
  const { previous, current, operation } = useSelector(
    (state) => state.calculator
  );

  return (
    <div
      className="w-full h-40 flex-col cal-grid
         bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right"
    >
      <div className="w-full py-5 px-5 text-3xl text-white  font-thin">
        {previous} {operation}
      </div>
      <div className="w-full py-3 px-5 text-5xl text-white font-thin">
        {current}
      </div>
    </div>
  );
}
