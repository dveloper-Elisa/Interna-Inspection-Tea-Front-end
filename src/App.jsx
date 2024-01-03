import { Routes, Route } from "react-router-dom";

import "./index.css";
import Navigation from "./components/navigation.jsx";
import Footer from "./components/footer.jsx";
import Home from "./components/home.jsx";
import Login from "./components/enter.jsx";
import AdminDashboard from "./components/imsTeam.jsx";
import NewInspector from "./components/newInspector.jsx";
import InspectorForm from "./components/inspectorForm.jsx";
import Famer from "./components/famer.jsx";
import FarmOperator from "./assets/farmoperator.jsx";
import FarmInfo from "./assets/farminfor.jsx";
import GpsCoordinates from "./assets/dpsCoadinates.jsx";
import HavestIn4years from "./assets/havestingp4y.jsx";
import FarmingLure from "./assets/famingLures.jsx";
import FarmOrigin from "./assets/farmOrigin.jsx";
import Farming from "./assets/farmingInGeneral.jsx";
import HealthSafety from "./assets/healthandsafety.jsx";
import Environment from "./assets/enviroment.jsx";
import Comfirm from "./assets/confirmation.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/dashboard" element={<AdminDashboard />} />
        <Route path="/createaccount" element={<NewInspector />} />
        <Route path="/form" element={<InspectorForm />} />
        <Route path="/farm" element={<Famer />} />
        <Route path="/farminfor" element={<FarmInfo />} />
        <Route path="/operator" element={<FarmOperator />} />
        <Route path="/gps" element={<GpsCoordinates />} />
        <Route path="/harvest4" element={<HavestIn4years />} />
        <Route path="/farmingrule" element={<FarmingLure />} />
        <Route path="/inheritfarm" element={<FarmOrigin />} />
        <Route path="/farmingtu" element={<Farming />} />
        <Route path="/health" element={<HealthSafety />} />
        <Route path="/enviroment" element={<Environment />} />
        <Route path="/confirm" element={<Comfirm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
