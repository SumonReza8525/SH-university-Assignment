import React from "react";

const Submitted = ({ handleSubmit }) => {
  return (
    <div onClick={handleSubmit} className="bg-gray-500 h-40">
      Submitted
    </div>
  );
};

export default Submitted;
