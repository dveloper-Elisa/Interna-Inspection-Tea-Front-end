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
        <Route path="/farminfor" element={<FarmOperator />} />
        <Route path="/nextForm" element={<FarmInfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
