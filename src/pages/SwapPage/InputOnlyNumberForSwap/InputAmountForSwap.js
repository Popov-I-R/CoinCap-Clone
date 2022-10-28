import React from "react";
import "./InputAmountForSwap.css";
import { useState } from "react";
import { useEffect } from "react";

export default function InputAmountForSwap({calculatedValue, setNumberToCalc, setFinalNumberToSwap, cleaner}) {

    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
      setInputValue(calculatedValue);
      setFinalNumberToSwap(calculatedValue);
    }, [calculatedValue])

    useEffect(() => {
      setInputValue("");
    }, [cleaner])
    

  return (
    <input
      onChange={(e) => {
        let value = e.target.value;
        if (
          (/^\d+\.\d+$|^\d+$/.test(value) ||
            value === "0." ||
            value === "" ||
            (value !== "." &&
              value[value.length - 1] === "." &&
              !inputValue.includes(".")) ||
            value.length < inputValue.length) &&
          value !== "00" &&
          value !== "01" &&
          value !== "02" &&
          value !== "03" &&
          value !== "04" &&
          value !== "05" &&
          value !== "06" &&
          value !== "07" &&
          value !== "08" &&
          value !== "09"
        ) {
          setInputValue(value);
          setNumberToCalc(Number(value));
          setFinalNumberToSwap(Number(value));
        } else if (
          value === "00" ||
          value === "01" ||
          value === "02" ||
          value === "03" ||
          value === "04" ||
          value === "05" ||
          value === "06" ||
          value === "07" ||
          value === "08" ||
          value === "09"
        ) {
          setInputValue(`${inputValue}.${value[value.length - 1]}`);
          setNumberToCalc(Number(value));
          setFinalNumberToSwap(Number(value));
        }
      }}
      inputMode="decimal"
      minLength="1"
      maxLength="79"
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
      pattern="^[0-9]*[.,]?[0-9]*$"
      type="text"
      placeholder="0"
      className="Currency-input-styled-input"
      value={inputValue}
    ></input>
  );
}
