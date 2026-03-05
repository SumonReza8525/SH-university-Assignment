import React from "react";

const Person = ({ person, addToPending }) => {
  return (
    <div
      onClick={() => {
        addToPending(person);
      }}
      className={` p-3 space-y-2 rounded-2xl hover:cursor-pointer  
                  
                  
                  transition-all duration-200 ease-in-out
                  hover:shadow-2xl hover:-translate-y-2 hover:scale-105 bg-linear-to-br from-cyan-300 to-gray-300  
                  cursor-pointer hover:bg-linear-to-tl hover:from-cyan-500 hover:to-gray-200 `}
    >
      <img
        className="rounded-full object-cover w-25 h-25 "
        src={person.personImage}
        alt=""
      />
      <p className="text-xl font-medium text-purple-600">{person.personName}</p>
      <div className="flex justify-between items-center">
        <p className=" font-semibold text-lg">{person.problemTitle}</p>
        <div className="flex gap-2">
          <button className="bg-pink-400 px-3 py-1.5 rounded-xl font-semibold">
            Pending
          </button>
          <button
            className={`rounded-xl font-semibold px-3 py-1.5 ${person.priority === "High" ? "bg-red-200 text-red-800" : person.priority === "Medium" ? "bg-yellow-200 text-yellow-800" : person.priority === "Low" ? "bg-purple-200 text-purple-800" : ""}`}
          >
            {person.priority}
          </button>
        </div>
      </div>
      <p className="hover:text-gray-700 text-gray-500 ">
        {person.problemShortDefinition}
      </p>
    </div>
  );
};

export default Person;
