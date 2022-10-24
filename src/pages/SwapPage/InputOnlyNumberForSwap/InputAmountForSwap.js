import React from "react";
import "./InputAmountForSwap.css";
import { useState } from "react";

export default function InputAmountForSwap() {

    const [currency, setCurrency] = useState("");

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
              !currency.includes(".")) ||
            value.length < currency.length) &&
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
          setCurrency(value);
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
          setCurrency(`${currency}.${value[value.length - 1]}`);
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
      value={currency}
    ></input>
  );
}
