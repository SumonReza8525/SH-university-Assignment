import React from "react";

const Reviewed = ({ handleReview }) => {
  return (
    <div onClick={handleReview} className="bg-red-500 h-40">
      Reviewed
    </div>
  );
};

export default Reviewed;
