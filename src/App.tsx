import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home/Home'
import DefaultLayout from "./DefaultLayout";
import Project from "./pages/Project/index";
import Loader from "./components/Loader";
import React from "react";

const App: React.FC = () => {
  return (
    <div>
      <Loader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/vizzhy" element={<Project.Vizzhy />} />
            <Route path="/drvoxel" element={<Project.DrVoxel />} />
            <Route path="/emvive" element={<Project.Emvive />} />
            <Route path="/kenroz" element={<Project.Kenroz />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Analytics />
    </div>
  )
}

export default App