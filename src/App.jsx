import React, { useEffect, useState } from "react";
import Container from "./Container";
import Navbar from "./components/navbar/Navbar";
import SubmissionsContainer from "./components/navbar/SubmissionsContainer";
import AllTypesContainer from "../AllTypesContainer";
import AllEntries from "./components/AllEntries";
import Pending from "../Pending";
import Submitted from "../Submitted";
import Reviewed from "../Reviewed";
import FooterMain from "./components/footer/FooterMain";
const App = () => {
  const [type, setType] = useState("all");
  const handleAll = () => {
    setType("all");
  };
  const handlePending = () => {
    setType("pending");
  };
  const handleSubmitted = () => {
    setType("submitted");
  };
  const handleReviewed = () => {
    setType("reviewed");
  };
  const [isPending, setIsPending] = useState([]);
  const addToPending = (p) => {
    setIsPending((prev) => {
      const exist = prev.find((person) => person.id === p.id);
      if (exist) return prev;

      return [...prev, p];
    });
  };

  // console.log(isPending);
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/Persons.json");
        if (!res.ok) throw new Error("Data can not fetch");
        const data = await res.json();
        setPersons(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error : {error}</h2>;

  return (
    <div className="roboto">
      <Navbar></Navbar>
      <Container>
        <SubmissionsContainer isPending={isPending}></SubmissionsContainer>

        <div className="my-20">
          <AllTypesContainer
            handleAll={handleAll}
            handleSubmitted={handleSubmitted}
            handleReviewed={handleReviewed}
            handlePending={handlePending}
          ></AllTypesContainer>
        </div>

        {type === "all" ? (
          <AllEntries
            addToPending={addToPending}
            persons={persons}
          ></AllEntries>
        ) : type === "pending" ? (
          <Pending isPending={isPending}></Pending>
        ) : type === "submitted" ? (
          <Submitted></Submitted>
        ) : type === "reviewed" ? (
          <Reviewed></Reviewed>
        ) : undefined}
      </Container>
      <div className=" mt-20 bg-[#000011]">
        <Container>
          <FooterMain></FooterMain>
        </Container>
        <div className="text-center text-gray-400 p-3 ">
          © 2026 SH-University. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default App;
