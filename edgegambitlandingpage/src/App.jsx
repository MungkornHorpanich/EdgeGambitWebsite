import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import JoinWaitlist from "./pages/JoinWaitlist";
import ThanksForJoining from "./pages/ThanksForJoining";
import WeAreLaunchingSoon from "./pages/WeAreLaunchingSoon";
import TermOfUse from "./pages/TermOfUse";
import Privacy from "./pages/Privacy";

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
      element: <Privacy />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
