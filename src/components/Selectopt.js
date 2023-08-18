import React from "react";

const Selectopt = ({ children, percentage, onSelect }) => {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value={0}> Not Satisfied (0%) </option>
        <option value={5}> Satisfied (5%) </option>
        <option value={10}> Good Service (10%) </option>
      </select>
    </div>
  );
};

export default Selectopt;
