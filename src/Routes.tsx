import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ReturnPolicy from "./Pages/ReturnPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";

export const Routes = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/allish",
      element: <Home />,
    },
    {
      path: "/allish/termsandconditions",
      element: <TermsAndConditions />,
    },
    {
      path: "/allish/privacypolicy",
      element: <PrivacyPolicy />,
    },
    {
      path: "/allish/returnpolicy",
      element: <ReturnPolicy />,
    },
  ]);
};
