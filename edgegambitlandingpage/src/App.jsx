import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import JoinWaitlist from "./pages/JoinWaitlist";
import ThanksForJoining from "./pages/ThanksForJoining";
import WeAreLaunchingSoon from "./pages/WeAreLaunchingSoon";

const App = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/joinwaitlist" element={<JoinWaitlist />} />
      <Route path="/thanksforjoining" element={<ThanksForJoining />} />
      <Route path="/wearelaunchingsoon" element={<WeAreLaunchingSoon />} />
    </Routes>
  );
};

export default App;
