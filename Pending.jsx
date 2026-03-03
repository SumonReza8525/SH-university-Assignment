import React from "react";

const Pending = ({ handlePending }) => {
  return (
    <div onClick={handlePending} className="bg-green-600 h-40">
      Pending
    </div>
  );
};

export default Pending;
