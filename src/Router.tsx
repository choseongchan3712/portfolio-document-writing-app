import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Report from "./form/pages/Report";
import Criminal from "./form/pages/Criminal";
import Bond from "./form/pages/Bond";
import Civil from "./form/pages/Civil";
import Administrative from "./form/pages/Administrative";
import IOU from "./form/bond/IOU";
import Waiver from "./form/bond/Waiver";
import Reminder from "./form/bond/Reminder";
import BondDebtInquiry from "./form/bond/BondDebtInquiry";
import Memorandum from "./form/bond/Memorandum";

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
        <Route path="/iou" element={<IOU />} />
        <Route path="/waiver" element={<Waiver />} />
        <Route path="/reminder" element={<Reminder />} />
        <Route path="/bond_debt_inquiry" element={<BondDebtInquiry />} />
        <Route path="/memorandum" element={<Memorandum />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
