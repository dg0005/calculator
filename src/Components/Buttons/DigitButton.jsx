import React from "react";
import { useDispatch } from "react-redux";
import { addDigit } from "../../Store/CalSlice";

export default function DigitButton({ digit }) {
  const dispatch = useDispatch();
  return (
    <button
      className="w-full h-16 outline-none focus:outline-none hover:bg-green-700 hover:bg-opacity-20 text-black text-opacity-90 text-xl font-light"
      onClick={() => dispatch(addDigit(digit))}
    >
      {digit}
    </button>
  );
}
