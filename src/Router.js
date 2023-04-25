import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Home from "./Scene/Home";
// import Nft from "./Scene/Nft";
import Mint from "./Scene/Mint";
import Event from "./Scene/Event";
import Footer from "./Layout/Footer";

function Router(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nft" element={<Mint />} />
        <Route path="/event" element={<Event />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
