import React from "react";
import DigitButton from "./Buttons/DigitButton";
import OperationButton from "./Buttons/OperationButton";
import OutputField from "./OutputField";

export default function CalcTable() {
  return (
    <div>
      <div className="w-full bg-gradient-to-b from-green-400 to-green-500">
        <div className="flex w-full">
          <div className="w-2/4 border-r border-b border-green-400">
            <OperationButton name="AC" />
          </div>
          <div className="w-1/4 border-r border-b border-green-400">
            <OperationButton name="DEL" />
          </div>
          <div className="w-1/4 border-r border-b border-green-400">
            <OperationButton name="/" />
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-green-400 to-green-500">
        <div className="flex w-full">
          <DigitButton digit="7" />
          <DigitButton digit="8" />
          <DigitButton digit="9" />
          <OperationButton name="+" />
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-green-400 to-green-500">
        <div className="flex w-full">
          <DigitButton digit="4" />
          <DigitButton digit="5" />
          <DigitButton digit="6" />
          <OperationButton name="-" />
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-green-400 to-green-500">
        <div className="flex w-full">
          <DigitButton digit="1" />
          <DigitButton digit="2" />
          <DigitButton digit="3" />
          <OperationButton name="*" />
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-green-400 to-green-500">
        <div className="flex w-full">
          <div className="w-1/4 border-r border-b border-green-400">
            <DigitButton digit="." />
          </div>
          <div className="w-1/4 border-r border-b border-green-400">
            <DigitButton digit="0" />
          </div>
          <div className="w-2/4 border-r border-b border-green-400">
            <OperationButton name="=" />
          </div>
        </div>
      </div>
    </div>
  );
}
