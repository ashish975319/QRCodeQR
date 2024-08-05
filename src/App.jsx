import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import QRCodeForm from "./components/QRCodeForm";
import ScannedDataDisplay from "./components/ScannedDataDisplay";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRCodeForm />} />
        <Route path="/scanned-data" element={<ScannedDataDisplay />} />
      </Routes>
    </Router>
  );
};

export default App;
