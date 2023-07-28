import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./pages/sidebar/Sidebar";
import Headernav from "./pages/headernav/Headernav";
import LandingPage from "./pages/landingpage/LandingPage";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/notfoundpage/NotFoundPage";

function App() {
  return (
    <Sidebar>
      <Headernav />
      <Routes>
        {/* <Route element={<LoginRoutes />}> */}
        <Route path="/">
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Sidebar>
  );
}

export default App;
