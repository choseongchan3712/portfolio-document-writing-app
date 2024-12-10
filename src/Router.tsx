import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Report from "./pages/Report";
import Criminal from "./pages/Criminal";
import Bond from "./pages/Bond";
import Civil from "./pages/Civil";
import Administrative from "./pages/Administrative";
import IOU from "./form/bond/IOU";
import Waiver from "./form/bond/Waiver";
import Reminder from "./form/bond/Reminder";
import Memorandum from "./form/bond/Memorandum";
import CivilLitigationComplaint from "./form/civil_litigation/CivilLitigationComplaint";
import Jurisdiction from "./form/civil_litigation/Jurisdiction";
import Withdraw from "./form/civil_litigation/Withdraw";
import PartiallyWithdrawn from "./form/civil_litigation/PartiallyWithdrawn";
import Suspension from "./form/civil_litigation/Suspension";
import AdminComplaint from "./form/administrative/AdminComplaint";
import Judgment from "./form/administrative/Judgment";

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
        <Route path="/memorandum" element={<Memorandum />} />
        <Route path="/civil_litigation_complaint" element={<CivilLitigationComplaint/>} />
        <Route path="/jurisdiction" element={<Jurisdiction/>} />
        <Route path="/withdraw" element={<Withdraw/>} />
        <Route path="/partially_withdrawn" element={<PartiallyWithdrawn/>} />
        <Route path="/suspension" element={<Suspension/>} />
        <Route path="/adminComplaint" element={<AdminComplaint/>} />
        <Route path="/adminComplaint" element={<AdminComplaint/>} />
        <Route path="/judgment" element={<Judgment/>} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
