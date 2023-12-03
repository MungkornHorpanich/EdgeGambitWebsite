import React from "react";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import JoinWaitlist from "./pages/JoinWaitlist";
import ThanksForJoining from "./pages/ThanksForJoining";
import WeAreLaunchingSoon from "./pages/WeAreLaunchingSoon";
import TermOfUse from "./pages/TermOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/joinwaitlist",
      element: <JoinWaitlist />,
    },
    {
      path: "/thanksforjoining",
      element: <ThanksForJoining />,
    },
    {
      path: "/wearelaunchingsoon",
      element: <WeAreLaunchingSoon />,
    },
    {
      path: "/termofuse",
      element: <TermOfUse />,
    },
    {
      path: "/privacypolicy",
      element: <PrivacyPolicy />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
