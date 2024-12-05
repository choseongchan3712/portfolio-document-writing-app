import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyled } from "./GlobalStyled";
import Reminder from "./form/bond/Reminder";
// import BondDebtInquiry from "./form/bond/BondDebtInquiry";
// import Memorandum from "./form/bond/Memorandum";
// import Test from "./Test";
// import Waiver from "./form/bond/Waiver";
// import IOU from "./form/bond/IOU";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <Reminder />
    {/* <BondDebtInquiry /> */}
    {/* <Memorandum /> */}
    {/* <Waiver /> */}
    {/* <IOU /> */}
    {/* <Test /> */}

  </React.StrictMode>
);
