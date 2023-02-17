import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "../App.css";

const History = () => {
  const history = useSelector((s) => s.calculator.history);
  return (
    <div className=" p-5 min-w-screen min-h-screen bg-gradient-to-b from-green-500 to-blue-500 ">
      <Link to="/" className="">
        <h2 className="hover:text-white text-black text-lg">Back</h2>
      </Link>

      <div className="flex items-center  flex-col justify-start ">
        <h2 className="text-3xl font-semibold text-black ">
          Past calculation history:
        </h2>

        <div className="m-5">
          {history && history.length > 0 ? (
            <ul className="text-teal-50 text-xl list-disc">
              {history.map((ele, key) => (
                <li key={key}>{ele}</li>
              ))}
            </ul>
          ) : (
            <h2>No history found.</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
