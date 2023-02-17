import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOperator, allClear, del, evaluate } from "../../Store/CalSlice";

export default function OperationButton({ name }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    switch (name) {
      case "DEL":
        dispatch(del());
        break;
      case "AC":
        dispatch(allClear());
        break;
      case "=":
        dispatch(evaluate());
        break;
      default:
        dispatch(addOperator(name));
        break;
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full h-16 outline-none focus:outline-none hover:bg-green-700 hover:bg-opacity-20 text-black text-opacity-90 text-xl font-light"
    >
      {name}
    </button>
  );
}
