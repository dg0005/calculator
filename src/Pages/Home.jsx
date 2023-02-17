import React from "react";
import { Link } from "react-router-dom";

import OutputField from "../Components/OutputField";
import CalcTable from "../Components/CalcTable";
import "../App.css";

const Home = () => {
  return (
    <div className="p-5 flex items-center justify-center flex-col min-w-screen min-h-screen bg-gradient-to-b from-green-500 to-blue-500 ">
      <div
        className="w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden"
        style={{ maxWidth: "300px" }}
      >
        <OutputField />
        <CalcTable />
      </div>

      <Link to="/history" className="m-4 p-2">
        <h2 className="hover:text-white text-black">Show History</h2>
      </Link>
    </div>
  );
};

export default Home;
