import React from "react";
import ReactDOM from "react-dom/client";
// import Test from "./Test";
import { GlobalStyled } from "./GlobalStyled";
import IOU from "./form/bond/IOU";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <IOU />
    {/* <Test /> */}

  </React.StrictMode>
);
