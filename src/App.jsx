import { Routes, Route } from "react-router-dom";

import "./index.css";
import Navigation from "./components/navigation.jsx";
import Footer from "./components/footer.jsx";
import Home from "./components/home.jsx";
import Login from "./components/enter.jsx";
import AdminDashboard from "./components/imsTeam.jsx";
import NewInspector from "./components/newInspector.jsx";
import InspectorForm from "./components/inspectorForm.jsx";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
