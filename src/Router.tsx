import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./form/components/Header";
import Report from "./form/pages/Report";
import Criminal from "./form/pages/Criminal";
import Bond from "./form/pages/Bond";
import Civil from "./form/pages/Civil";
import Administrative from "./form/pages/Administrative";

const Router = (): JSX.Element => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"/report"} replace />} />
        <Route path="/report" element={<Report />} />
        <Route path="/bond" element={<Bond />} />
        <Route path="/civil" element={<Civil />} />
        <Route path="/criminal" element={<Criminal />} />
        <Route path="/administrative" element={<Administrative />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
