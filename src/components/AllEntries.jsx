import React from "react";

const AllEntries = ({ handleAll }) => {
  return (
    <div onClick={handleAll} className="bg-cyan-600 h-40">
      All entries
    </div>
  );
};

export default AllEntries;
