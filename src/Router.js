import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Home from "./Scene/Home";
import Community from "./Scene/Community";
import CustomerCenter from "./Scene/CustomerCenter";
import Education from "./Scene/Education";
import EnteranceExam from "./Scene/EnteranceExam";
import Epilogue from "./Scene/Epilogue";
import Event from "./Scene/Event";
import GotAJob from "./Scene/GotAJob";
import Situation from "./Scene/Situation";
import SpecialLecture from "./Scene/SpecialLecture";
import NotFound from "./Scene/NotFound";
// import BottomBar from "./Components/Layout/BottomBar";
import Footer from "./Components/Layout/Footer";

function Router(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/customer-center" element={<CustomerCenter />} />
        <Route path="/education" element={<Education />} />
        <Route path="/enterance-exam" element={<EnteranceExam />} />
        <Route path="/epilogue" element={<Epilogue />} />
        <Route path="/event" element={<Event />} />
        <Route path="/got-a-job" element={<GotAJob />} />
        <Route path="/situation" element={<Situation />} />
        <Route path="/special-lecture" element={<SpecialLecture />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
      {/* <BottomBar /> */}
    </BrowserRouter>
  );
}

export default Router;
