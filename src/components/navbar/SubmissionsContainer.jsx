import React from "react";

const SubmissionsContainer = ({ isPending }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
      <div className="flex flex-col justify-center items-center bg-gray-500 min-h-30 rounded-2xl ">
        <p className="text-2xl text-white font-bold">Pending</p>
        <p className="font-extrabold text-amber-400 text-3xl">
          {isPending.length}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center bg-cyan-600 min-h-30 rounded-2xl">
        <p className="text-2xl text-white font-bold">Submitted</p>
        <p className="font-extrabold text-amber-400 text-3xl">0</p>
      </div>
      <div className="flex flex-col justify-center items-center bg-purple-600 min-h-30 rounded-2xl">
        <p className="text-2xl text-white font-bold">Reviewed</p>
        <p className="font-extrabold text-amber-400 text-3xl">0</p>
      </div>
    </div>
  );
};

export default SubmissionsContainer;
