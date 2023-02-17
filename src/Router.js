import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Home from "./Scene/Home";
// import Community from "./Scene/Community";
// import CustomerCenter from "./Scene/CustomerCenter";
// import Education from "./Scene/Education";
// import EnteranceExam from "./Scene/EnteranceExam";
// import Epilogue from "./Scene/Epilogue";
// import Event from "./Scene/Event";
// import GotAJob from "./Scene/GotAJob";
// import Situation from "./Scene/Situation";
// import SpecialLecture from "./Scene/SpecialLecture";
// import NotFound from "./Scene/NotFound";
// import BottomBar from "./Components/Layout/BottomBar";
import Footer from "./Layout/Footer";

function Router(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Home />} />
        <Route path="/customer-center" element={<Home />} />
        <Route path="/education" element={<Home />} />
        <Route path="/enterance-exam" element={<Home />} />
        <Route path="/epilogue" element={<Home />} />
        <Route path="/event" element={<Home />} />
        <Route path="/got-a-job" element={<Home />} />
        <Route path="/situation" element={<Home />} />
        <Route path="/special-lecture" element={<Home />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
      {/* <BottomBar /> */}
    </BrowserRouter>
  );
}

export default Router;
