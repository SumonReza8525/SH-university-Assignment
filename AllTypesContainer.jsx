import React, { useState } from "react";

const AllTypesContainer = ({
  handleAll,
  handleSubmitted,
  handleReviewed,
  handlePending,
}) => {
  const [activeAll, setActiveAll] = useState(true);
  const [activePending, setActivePending] = useState(false);
  const [activeSubmitted, setActiveSubmitted] = useState(false);
  const [activeReviewed, setActiveReviewed] = useState(false);

  return (
    <div className="text-right ">
      <button
        onClick={() => {
          (handleAll(),
            setActiveAll(true),
            setActivePending(false),
            setActiveSubmitted(false),
            setActiveReviewed(false));
        }}
        className={`cursor-pointer hover:bg-purple-400 hover:text-white transition-all duration-300 px-4 py-2 rounded-l-xl  font-bold border-r ${activeAll ? "bg-purple-600 text-white" : "bg-gray-300 text-purple-600"}`}
      >
        All
      </button>
      <button
        onClick={() => {
          (handlePending(),
            setActiveAll(false),
            setActivePending(true),
            setActiveSubmitted(false),
            setActiveReviewed(false));
        }}
        className={`cursor-pointer hover:bg-purple-400 hover:text-white transition-all duration-300 px-4 py-2 border-r    font-bold ${activePending ? "bg-purple-600 text-white" : "bg-gray-300 text-purple-600"}`}
      >
        Pending
      </button>
      <button
        onClick={() => {
          (handleSubmitted(),
            setActiveAll(false),
            setActivePending(false),
            setActiveSubmitted(true),
            setActiveReviewed(false));
        }}
        className={`cursor-pointer hover:bg-purple-400 hover:text-white transition-all duration-300 px-4 py-2 border-r  bg-gray-300 text-purple-600 font-bold ${activeSubmitted ? "bg-purple-600 text-white" : "bg-gray-300 text-purple-600"}`}
      >
        Submitted
      </button>
      <button
        onClick={() => {
          (handleReviewed(),
            setActiveAll(false),
            setActivePending(false),
            setActiveSubmitted(false),
            setActiveReviewed(true));
        }}
        className={`cursor-pointer hover:bg-purple-400 hover:text-white transition-all duration-300 px-4  py-2 rounded-r-xl bg-gray-300 text-purple-600 font-bold ${activeReviewed ? "bg-purple-600 text-white" : "bg-gray-300 text-purple-600"}`}
      >
        Reviewed
      </button>
    </div>
  );
};

export default AllTypesContainer;
