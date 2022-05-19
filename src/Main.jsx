import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Blockchain from "./pages/Blockchain";
import Bitcoin from "./pages/Bitcoin";
import WebThree from "./pages/WebThree";
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import './style/Navbar.css'


export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="blockchain" element={<Blockchain />} />
          <Route path="bitcoin" element={<Bitcoin />} />
          <Route path="webthree" element={<WebThree />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}