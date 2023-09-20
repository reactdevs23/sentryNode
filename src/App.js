import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Dashboard/Header/Header";
import CreateApi from "./pages/CreateApi/CreateApi";
import ApiDetails from "./pages/ApiDetails/ApiDetails";
import SettingsAndBilling from "./pages/SettingsAndBilling/SettingsAndBilling";
import SignUp from "./pages/LogInAndSignUp/SignUp";
import Login from "./pages/LogInAndSignUp/Login";
import Home from "./pages/Home/Home";
import SecondProjects from "./components/Dashboard/Projects/SecondProjects/SecondProjects";
import Projects from "./components/Dashboard/Projects/FirstProjects/Projects";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Header />}

      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Projects />} />
        {/* <Route path="/dashboard" element={<SecondProjects />} /> */}
        <Route path="/settings&billing/*" element={<SettingsAndBilling />} />
        <Route path="/apis" element={<CreateApi />} />
        <Route path="/apiDetails" element={<ApiDetails />} />
      </Routes>
    </>
  );
}

export default App;
