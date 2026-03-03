import React from "react";
import Person from "./Person";

const AllEntries = ({ handleAll, persons, addToPending }) => {
  return (
    <div
      onClick={handleAll}
      className=" gap-10 grid grid-cols-1 lg:grid-cols-3"
    >
      {persons.map((person) => (
        <Person
          addToPending={addToPending}
          key={person.id}
          person={person}
        ></Person>
      ))}
    </div>
  );
};

export default AllEntries;
