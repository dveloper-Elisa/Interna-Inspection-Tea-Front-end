import { Routes, Route } from "react-router-dom";

import "./index.css";
import Navigation from "./components/navigation.jsx";
import Footer from "./components/footer.jsx";
import Home from "./components/home.jsx";
import Login from "./components/enter.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
