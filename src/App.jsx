import React, { useState } from "react";
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
  const [type, setType] = useState("reviewed");
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

  return (
    <div className="roboto">
      <Navbar></Navbar>
      <Container>
        <SubmissionsContainer></SubmissionsContainer>

        <div className="my-20">
          <AllTypesContainer
            handleAll={handleAll}
            handleSubmitted={handleSubmitted}
            handleReviewed={handleReviewed}
            handlePending={handlePending}
          ></AllTypesContainer>
        </div>

        {type === "all" ? (
          <AllEntries></AllEntries>
        ) : type === "pending" ? (
          <Pending></Pending>
        ) : type === "submitted" ? (
          <Submitted></Submitted>
        ) : type === "reviewed" ? (
          <Reviewed></Reviewed>
        ) : undefined}
      </Container>
      <div className=" mt-20 bg-[#000011] flex justify-center items-center">
        <Container>
          <FooterMain></FooterMain>
        </Container>
      </div>
    </div>
  );
};

export default App;
