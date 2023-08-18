import React from "react";

const OutPut = ({ bill, tip }) => {
  return (
    <div>
      <h3>
        Your Bill {bill} (${bill} + ${tip} tip)
      </h3>
    </div>
  );
};

export default OutPut;
