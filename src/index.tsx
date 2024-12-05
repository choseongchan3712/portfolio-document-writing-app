import React from "react";
import ReactDOM from "react-dom/client";
// import Test from "./Test";
import { GlobalStyled } from "./GlobalStyled";
import Waiver from "./form/bond/Waiver";
// import IOU from "./form/bond/IOU";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <Waiver />
    {/* <IOU /> */}
    {/* <Test /> */}

  </React.StrictMode>
);
