import React from "react";
// Notice we import Routes, not Switch
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Notes from "./pages/Notes";

export default function BasicExample() {
  return (
    <BrowserRouter>
      {}
      <Routes>
        <Route path="/" element={<Notes />} /> 
      </Routes>
    </BrowserRouter>
  );
}