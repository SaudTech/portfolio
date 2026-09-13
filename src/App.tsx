import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home/Home";
import ProjectPage from "./pages/Project/ProjectPage";
import React from "react";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
};

export default App;
