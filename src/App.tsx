import React from "react";
import { BrowserRouter } from "react-router-dom";
import { SmoothScroll } from "./SmoothScroll";
import { Router } from "./Router";
import "./app.css";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <Router />
    </BrowserRouter>
  );
};

export default App;
