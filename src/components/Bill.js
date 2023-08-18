import React from "react";

const Bill = ({ bill, onSetbill }) => {
  return (
    <div>
      <label>Your Bill is ?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetbill(Number(e.target.value))}
      />
    </div>
  );
};

export default Bill;
