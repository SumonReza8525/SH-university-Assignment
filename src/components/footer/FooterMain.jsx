import React from "react";
import FooterPrat1 from "./FooterPrat1";
import FooterPart2 from "./FooterPart2";
import FooterPart3 from "./FooterPart3";
import FooterPart4 from "./FooterPart4";
import FooterPart5 from "./FooterPart5";
const FooterMain = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-30 lg:h-100 pt-20   pb-10 ">
      <FooterPrat1></FooterPrat1>
      <FooterPart2></FooterPart2>
      <FooterPart3></FooterPart3>
      <FooterPart4></FooterPart4>
      <FooterPart5></FooterPart5>
    </div>
  );
};

export default FooterMain;
