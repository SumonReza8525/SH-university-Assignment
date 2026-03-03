import React from "react";
import Person from "./src/components/Person";
const Pending = ({ handlePending, isPending }) => {
  return (
    <div
      onClick={handlePending}
      className=" gap-10 grid grid-cols-1 lg:grid-cols-3"
    >
      {isPending.map((person) => (
        <Person key={person.id} person={person}></Person>
      ))}
    </div>
  );
};

export default Pending;
