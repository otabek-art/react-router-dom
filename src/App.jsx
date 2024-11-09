import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Abbout from "./pages/Abbout";
import Contact from "./pages/Contact";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Abbout />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
