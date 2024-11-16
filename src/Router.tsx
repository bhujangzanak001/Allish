import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ReturnPolicy from "./Pages/ReturnPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allish" element={<Home />} />
      <Route
        path="/allish/termsandconditions"
        element={<TermsAndConditions />}
      />
      <Route path="/allish/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/allish/returnpolicy" element={<ReturnPolicy />} />
    </Routes>
  );
};
